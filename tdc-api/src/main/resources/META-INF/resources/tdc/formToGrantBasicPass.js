function getAcceptedTermsValue() {
    const element = document.getElementById("vo_accepted_terms_to_grant_basic_pass");

    if (element.checked) {
        return true;
    } else {
        return false;
    }
}

const getValueOf = (id) => document.getElementById(id).value;

function postDataToGrantBasicPassThroughEmail() {
    console.log("Post data to grant basic pass trough email");
    const url = '/api/user/grant-basic-pass-data';

    const user = {
        name: getValueOf("vo_name_to_grant_basic_pass"),
        email: getValueOf("vo_email_to_grant_basic_pass"),
        acceptedTerms: getAcceptedTermsValue()
    }

    console.log("fetch data=> " + JSON.stringify(user));

    fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then(response => {
        if (response.ok) {
            console.log("Dados para receber email e garantir o basic pass enviados com sucesso!");
        } else {
            console.log("Ocorreu algum problema durante o envio dos dados para receber email e garantir o basic pass!");
        }
    });
}
