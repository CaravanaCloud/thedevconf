function addHTML(id, value) {
    document.getElementById(id).innerHTML = value;
}

function signIn() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signIn().then(function () {
        console.log('User signed in.');
        window.location="/user/user-area";
    });
}

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();

    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.\
}

function setupLoginListeners() {
    console.log('setup listeners');
    var auth2 = gapi.auth2.getAuthInstance();

    auth2.isSignedIn.listen(signinChanged);

    auth2.currentUser.listen(userChanged);

    updateUser();
}

function loadAuth2() {
    gapi.load('auth2', () => {
        console.log('loaded auth2');
        gapi.auth2.init().then(setupLoginListeners);
    });
}

function signinChanged(isSignedIn) {
    console.log('signed in', isSignedIn);
    updateUser();
}

function userChanged(googleUser) {
    console.log('user', googleUser);
    updateUser();
}

function updateUser() {
    if (gapi.auth2){
        const isSignedIn = gapi.auth2.getAuthInstance().isSignedIn.get();
        if (isSignedIn) {
            const userName = gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile().getName();
            document.getElementById("login-header-tab").hidden = true;
            addHTML("profile-header-tab", userName);
            addHTML("user-name-profile", userName);
        } else {
            document.getElementById("profile-header-tab").hidden = false;
            addHTML("login-header-tab", "Login");
        }
    }
};

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
      window.location = "/";
    });
}