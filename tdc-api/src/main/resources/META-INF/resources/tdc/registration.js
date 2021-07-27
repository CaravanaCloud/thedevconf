console.log("Sample Registration Page");
let vo = null;

function postRegistrationForm() {
    const params = {"clientId":vo.clientId};
    const url = '/api/user/registration?' + new URLSearchParams(params).toString();

    vo.name = document.getElementById("vo_name").value;
    vo.emailWithConfirmation = {};
    vo.emailWithConfirmation.email = document.getElementById("vo_email").value;
    vo.emailWithConfirmation.emailConfirmation = document.getElementById("vo_email_confirm").value;
    vo.passwordWithConfirmation={};
    vo.passwordWithConfirmation.password = document.getElementById("vo_password").value;
    vo.passwordWithConfirmation.passwordConfirmation = document.getElementById("vo_password_confirm").value;
    vo.acceptedTerms = Boolean(document.getElementById("vo_accepted_terms").value);

    fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(vo)
    }).then(response => response.json())
        .then(data => {console.log(data);return data});
        .then(data => paint(data));
    console.log("fetch data=> " + JSON.stringify(vo));
}

function paint(registration) {
    const time = toLocalString(registration.createTime);
    replaceClass("createTime", registration.createTime);
    vo = registration;
}

function load(userInfo) {
    const clientId = userInfo.getClientId();
    log("Registering Client "+ clientId);

    const params = {"clientId":clientId};
    const url = '/api/user/registration?' + new URLSearchParams(params).toString();

    fetch(url)
        .then(response => response.json())
        .then(data => paint(data));
}

onClientReady(load);