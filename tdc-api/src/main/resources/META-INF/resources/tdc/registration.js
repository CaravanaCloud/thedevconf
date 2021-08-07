console.log("Sample Registration Page");

function postRegistrationForm() {
    const url = '/api/user/registration';
    vo = {};
    vo.name = document.getElementById("vo_name").value;
    vo.emailWithConfirmation = {};
    vo.emailWithConfirmation.email = document.getElementById("vo_email").value;
    vo.emailWithConfirmation.emailConfirmation = document.getElementById("vo_email_confirm").value;
    vo.passwordWithConfirmation = {};
    vo.passwordWithConfirmation.password = document.getElementById("vo_password").value;
    vo.passwordWithConfirmation.passwordConfirmation = document.getElementById("vo_password_confirm").value;
    vo.acceptedTerms = Boolean(document.getElementById("vo_accepted_terms").value);

    fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(vo)
    })
        .then(response => handleResponse(response))
        .catch(onGenericError);
    console.log("fetch data=> " + JSON.stringify(vo));
}

function handleResponse(response) {
    clearAlerts('form-alerts');
    console.log(response);
    response.json()
        .then(payload => {
            if (response.status == 200) { // OK
                window.location = '/user/registration-confirmation';
            } else {
                let explodedAlert = false;
                if(payload.exception){
                    showAlertWarning('form-alerts', payload.exception);
                    explodedAlert = true;
                }
                Object.keys(payload)
                    .filter(f => /.*Violations/.test(f))
                    .map(f => payload[f])
                    .filter(v => v && v.length > 0)
                    .forEach(violations => {
                        violations
                            .filter(v => v.message)
                            .map(v => v.message)
                            .forEach(message => {
                                showAlertWarning('form-alerts', message);
                                explodedAlert = true;
                            })
                    });
                if(!explodedAlert && payload){
                    showAlertWarning('form-alerts', payload);
                    explodedAlert = true;
                }
                if(!explodedAlert){
                    showAlertWarning('form-alerts', 'Error on registration');
                    explodedAlert = true;
                }
                console.log("Error on registration:");
                console.log(payload);
            }
        })
        .catch(onGenericError);
}


function onGenericError({message}) {
    clearAlerts('form-alerts');
    showAlertWarning('form-alerts', `Error: ${message}`);
    console.log(message);
}

function load(userInfo) {
    const clientId = userInfo.getClientId();
    log("Registering Client " + clientId);
}

onClientReady(load);
