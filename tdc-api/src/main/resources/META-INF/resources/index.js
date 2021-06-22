function addHTML(id, value) {
    document.getElementById(id).innerHTML = value;
}

function signIn() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signIn().then(function () {
        console.log('User signed in.');
    });
}

function setupLoginListeners() {
    console.log('setup listeners');
    var auth2 = gapi.auth2.getAuthInstance();

    auth2.isSignedIn.listen(signinChanged);

    auth2.currentUser.listen(userChanged);

    // Start with the current live values.
    // refreshValues();
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
}

function userChanged(googleUser) {
    console.log('user', googleUser);
}

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();

    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.\
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
      window.location = "/";
    });
}