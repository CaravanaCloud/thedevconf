function replaceElements(userInfo){
    const clientIdLabel = "** " + userInfo[CLIENT_ID] || "ANONYMOUS";
    replaceClass("tdc_client_id", clientIdLabel);
}

function showUserProfile(userInfo) {
    debug("showUserProfile()")
    if (!userInfo.getName()) {
        log("Anonymous user, show something else");
        return;
    }
    let userName = userInfo.getName();
    let imageUrl = userInfo.getImageUrl();
    log(userInfo);
    log(userInfo.getName());

    $("#login-header-tab").remove();
    $("#profile-header-tab").append(`<a class="nav-link" href="/user/user-area">${userName}</a>`);

    const el = document.getElementById("user-photo-profile");
    if (el != null) {
        el.src = imageUrl;
    }
    addHTML("user-name-profile", userName);
}

onClientReady(replaceElements);
onClientReady(showUserProfile);