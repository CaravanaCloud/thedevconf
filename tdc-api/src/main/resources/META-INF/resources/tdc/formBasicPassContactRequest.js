function getAcceptedTermsValue() {
    const element = document.getElementById("vo_accepted_terms_basic_pass_contact_request");

    if (element.checked) {
        return true;
    } else {
        return false;
    }
}

const getValueOf = (id) => document.getElementById(id).value;

function postBasicPassContactRequestData() {
    console.log("Post data to grant basic pass trough email");
    const url = '/api/basic-pass/grant-basic-pass-data';

    const data = {
        name: getValueOf("vo_name_basic_pass_contact_request"),
        email: getValueOf("vo_email_basic_pass_contact_request"),
        emailConfirmation: getValueOf("vo_email_confirmation_basic_pass_contact_request"),
        acceptedTerms: getAcceptedTermsValue(),
        emailSendingStatus: false
    }

    console.log("fetch data=> " + JSON.stringify(data));

    fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => {
        if (response.ok) {
            console.log("Dados para receber email e garantir o basic pass enviados com sucesso!");
        } else {
            console.log("Ocorreu algum problema durante o envio dos dados para receber email e garantir o basic pass!");
        }
    });
}
