function addHTML(id, value) {
    document.getElementById(id).innerHTML = value;
}

function signIn() {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signIn().then(function () {
        window.location = "/user/user-area";
    });
}

function onSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();

    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.\
}

function signOut() {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        window.location = "/";
    });
}