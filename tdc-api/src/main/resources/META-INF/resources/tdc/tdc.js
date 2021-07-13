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
    loadUserInfo(cb);
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
        userInfo = {
            [CLIENT_ID]: lStore.getItem(CLIENT_ID),
            [ID_TOKEN]: lStore.getItem(ID_TOKEN),
            [ID_TOKEN_TYPE]: lStore.getItem(ID_TOKEN_TYPE),
            [GOOGLE_ID]: lStore.getItem(GOOGLE_ID),
            [GOOGLE_NAME]: lStore.getItem(GOOGLE_NAME),
            [GOOGLE_GIVEN_NAME]: lStore.getItem(GOOGLE_GIVEN_NAME),
            [GOOGLE_FAMILY_NAME]: lStore.getItem(GOOGLE_FAMILY_NAME),
            [GOOGLE_IMAGE_URL]: lStore.getItem(GOOGLE_IMAGE_URL),
            [GOOGLE_EMAIL]: lStore.getItem(GOOGLE_EMAIL),
            "getName": function() {
                    return this[GOOGLE_NAME];
                    },
            "getImageUrl": function() {
                return this[GOOGLE_IMAGE_URL];
                },
            "getClientId": function (){
                return this[CLIENT_ID];
                },
            "getIdToken": function (){
                return this[ID_TOKEN];
            }
        }
        saveClientIdToCookie(userInfo);
    }
    return userInfo;
}

function loadUserInfo(cb){
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

function saveCookie(key, value){
    debug("saveCookie()");
    let duration = moment().add(6, 'months');
    let path = "/";
    let expiration = duration.toISOString();
    let cookie = `${key}=${value}; expires=${expiration}; path=${path}`;
    debug(cookie);
    document.cookie = cookie;
}

function saveClientIdToCookie(userInfo){
    saveCookie(CLIENT_ID, userInfo.getClientId());
}

function saveGoogleTokenOnSignIn(googleUser) {
    debug("saveGoogleTokenOnSignIn()");
    debug(googleUser);
    saveUserInfoToLocalStorage(googleUser);
    loadUserInfo(function (userInfo){
        saveUserInfoToBackend(userInfo, googleUser);
    });
}

function saveUserInfoToBackend(userInfo, googleUser){
    let url = '/api/google/tokensignin';
    let data = {
        [ID_TOKEN]: userInfo.getIdToken(),
        [CLIENT_ID]: userInfo.getClientId()
    };
    let jsonBody = JSON.stringify(data);
    console.log(data);
    fetch(url, {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: jsonBody,
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

function saveUserInfoToLocalStorage(user) {
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
        }
    }
};

function printStorage(){
    log(loadUserFromStorage());
}

function signIn(userInfo) {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signIn().then(function() {
        window.location="/user/user-area";
    });
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    clearLocalStorage();
    auth2.signOut().then(function() {
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


log("TDC Client Library Loaded.");