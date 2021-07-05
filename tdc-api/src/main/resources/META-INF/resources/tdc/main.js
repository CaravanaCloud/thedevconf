function replaceElements(userInfo){
    const clientIdLabel = "** " + userInfo[CLIENT_ID] || "ANONYMOUS";
    replaceClass("tdc_client_id", clientIdLabel);
}

function showUserProfile(userInfo) {
    debug("showUserProfile()")
    if (! userInfo) {
        log("Anonymous user, show something else");
        return;
    }
    let userName = userInfo.getName();
    let imageUrl = userInfo.getImageUrl();
    log(userInfo);
    document.getElementById("login-header-tab").hidden = true;
    addHTML("profile-header-tab", userName);
    const el = document.getElementById("user-photo-profile");
    if (el != null) {
        el.src = imageUrl;
    }
    addHTML("user-name-profile", userName);
}

onClientReady(replaceElements);
onClientReady(showUserProfile);
