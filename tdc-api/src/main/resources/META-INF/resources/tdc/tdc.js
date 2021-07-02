// noinspection JSUnresolvedFunction
const hashids = new Hashids()

// Browser ID
const CLIENT_ID = 'tdc.clientId';

// User ID
const ID_TOKEN = 'tdc.idToken';
const ID_TOKEN_TYPE = 'tdc.token';
const GOOGLE_TOKEN = 'tdc.tokenType';
const GOOGLE_ID = 'tdc.google.id';
const GOOGLE_NAME = 'tdc.google.name';
const GOOGLE_GIVEN_NAME = 'tdc.google.given_name';
const GOOGLE_FAMILY_NAME = 'tdc.google.family_name';
const GOOGLE_IMAGE_URL = 'tdc.google.image_url';
const GOOGLE_EMAIL = 'tdc.google.email';

function onClientReady(cb){
    loadClientId(cb);
}

function log(){
    console.log.apply(null, arguments);
}

const warn = log

function debug(){
    console.log.apply(null, arguments);
}

function loadUserFromStorage(){
    let userInfo = null;
    let lStore = window.localStorage;
    if (lStore) {
        userInfo = {}
        userInfo[CLIENT_ID] = lStore.getItem(CLIENT_ID);
        userInfo[ID_TOKEN] = lStore.getItem(ID_TOKEN);
        userInfo[ID_TOKEN_TYPE] = lStore.getItem(ID_TOKEN_TYPE);
        userInfo[GOOGLE_ID] = lStore.getItem(GOOGLE_ID);
        userInfo[GOOGLE_NAME] = lStore.getItem(GOOGLE_NAME);
        userInfo[GOOGLE_GIVEN_NAME] = lStore.getItem(GOOGLE_GIVEN_NAME);
        userInfo[GOOGLE_FAMILY_NAME] = lStore.getItem(GOOGLE_FAMILY_NAME);
        userInfo[GOOGLE_IMAGE_URL] = lStore.getItem(GOOGLE_IMAGE_URL);
        userInfo[GOOGLE_EMAIL] = lStore.getItem(GOOGLE_EMAIL);
    }
    return userInfo;
}

function loadClientId(cb){
    let userInfo = null;
    let lStore = window.localStorage;
    if (lStore){
        let clientId = lStore.getItem(CLIENT_ID);
        if(! clientId) {
            clientId = genRandomHash();
            lStore.setItem(CLIENT_ID, clientId);
        }
        userInfo = loadUserFromStorage();
    } else warn("Local Storage Unavailable");
    cb(userInfo);
}

function saveGoogleTokenOnSignIn(user) {
    debug("saveGoogleTokenOnSignIn()");
    debug(user);
    const lStore = window.localStorage;
    if (lStore) {
        const idToken = user.getAuthResponse().id_token;
        lStore.setItem(ID_TOKEN_TYPE, GOOGLE_TOKEN);
        lStore.setItem(ID_TOKEN, idToken);
        const profile = user.getBasicProfile();
        lStore.setItem(GOOGLE_ID, profile.getId());
        lStore.setItem(GOOGLE_NAME, profile.getName());
        lStore.setItem(GOOGLE_GIVEN_NAME, profile.getGivenName());
        lStore.setItem(GOOGLE_FAMILY_NAME, profile.getFamilyName());
        lStore.setItem(GOOGLE_IMAGE_URL, profile.getImageUrl());
        lStore.setItem(GOOGLE_EMAIL, profile.getEmail());
        debug("Google ID Token stored ", idToken);
    } else warn("Local Storage Unavailabe");
}

function debugOnCR(userInfo){
    debug("*** User Info ****")
    if (userInfo){
        debug(userInfo)
    }
    debug("******************")
}

function replaceClass(className, innerHTML){
    const els = document.getElementsByClassName(className);
    for (let i = 0; i < els.length; i++) {
        els[i].innerHTML = innerHTML;
    }
}

function replaceElements(userInfo){
    const clientIdLabel = userInfo[CLIENT_ID] || "ANONYMOUS";
    replaceClass("tdc_client_id", clientIdLabel);
}

function loadGoogleAuth2() {
    gapi.load('auth2', () => {
        gapi.auth2.init().then(setupLoginListeners);
    });
}

function setupLoginListeners() {
    debug("setupLoginListers()")
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.isSignedIn.listen(signinChanged);
    auth2.currentUser.listen(userChanged);
    updateUser();
}

function signinChanged(isSignedIn) {
    debug("signInChanged()",isSignedIn)
    if ( ! isSignedIn ){
        clearLocalStorage();
    }
    // updateUser();
}

function userChanged(googleUser) {
    debug("userChanged()", googleUser)
    updateUser();
}

function updateUser() {
    debug("updateUser()")
    if (gapi.auth2){
        const isSignedIn = gapi.auth2.getAuthInstance().isSignedIn.get();
        const user = gapi.auth2.getAuthInstance().currentUser.get();
        const profile = user.getBasicProfile();
        if (isSignedIn) {
            saveGoogleTokenOnSignIn(user);
            showUserProfile(profile);
        }
    }
};

function printStorage(){
    log(loadUserFromStorage());
}

function showUserProfile(user) {
    debug("showUserProfile()")
    document.getElementById("login-header-tab").hidden = true;
    addHTML("profile-header-tab", user.getName());
    const el = document.getElementById("user-photo-profile");
    if (el != null) {
        el.src = user.getImageUrl();
    }
    addHTML("user-name-profile", user.getName());
}

function signIn() {
    var auth2 = gapi.auth2.getAuthInstance();
/*
   auth2.signIn().then(function () {
        window.location="/user/user-area";
    });
 */
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    clearLocalStorage();
    auth2.signOut().then(function () {
        window.location = "/";
    });
}

function clearLocalStorage(){
    let lStore = window.localStorage;
    if (lStore) {
        lStore.removeItem(ID_TOKEN_TYPE);
        lStore.removeItem(ID_TOKEN);
        lStore.removeItem(GOOGLE_TOKEN);
        lStore.removeItem(GOOGLE_ID);
        lStore.removeItem(GOOGLE_NAME);
        lStore.removeItem(GOOGLE_GIVEN_NAME);
        lStore.removeItem(GOOGLE_FAMILY_NAME);
        lStore.removeItem(GOOGLE_IMAGE_URL);
        lStore.removeItem(GOOGLE_EMAIL);
        debug("Local Storage Cleared");
    } else warn("Local Storage Unavailabe");
}

onClientReady(debugOnCR);
onClientReady(replaceElements);

log("TDC Client Library Loaded.");
