console.log("Sample Registration Page");
let vo = null;

function postRegistrationForm() {
    const params = {"clientId":vo.clientId};
    const url = '/api/user/registration?' + new URLSearchParams(params).toString();

    vo.name = document.getElementById("vo_name").value;
    vo.email = document.getElementById("vo_email").value;
    vo.password = document.getElementById("vo_password").value;
    vo.acceptedTerms = Boolean(document.getElementById("vo_accepted_terms").value);

    fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(vo)
    }).then(response => response.json())
        .then(data => paint(data));
    console.log("fetch data=> " + JSON.stringify(vo));
}

function paint(registration) {
    const time = toLocalString(registration.createTime);
    replaceClass("createTime", registration.createTime);
    vo = registration;
}

function load(clientId) {
    log("Registering Client "+ clientId);

    const params = {"clientId":clientId};
    const url = '/api/user/registration?' + new URLSearchParams(params).toString();

    fetch(url)
        .then(response => response.json())
        .then(data => paint(data));
}

onClientReady(load);