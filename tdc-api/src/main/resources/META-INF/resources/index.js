function addHTML(id, value) {
    document.getElementById(id).innerHTML = value;
}

function signIn() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signIn().then(function () {
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
    var auth2 = gapi.auth2.getAuthInstance();

    auth2.isSignedIn.listen(signinChanged);

    auth2.currentUser.listen(userChanged);

    updateUser();
}

function loadAuth2() {
    gapi.load('auth2', () => {
        gapi.auth2.init().then(setupLoginListeners);
    });
}

function signinChanged(isSignedIn) {
    updateUser();
}

function userChanged(googleUser) {
    updateUser();
}

function updateUser() {
    if (gapi.auth2){
        const isSignedIn = gapi.auth2.getAuthInstance().isSignedIn.get();
        const user = gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile();
        if (isSignedIn) {
            addHTML("profile-header-tab", user.getName());
            document.getElementById("login-header-tab").hidden = true;
            document.getElementById("user-photo-profile").src = user.getImageUrl();
            addHTML("user-name-profile", user.getName());
        } else {
            document.getElementById("profile-header-tab").hidden = true;
        }
    }
};

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      window.location = "/";
    });
}