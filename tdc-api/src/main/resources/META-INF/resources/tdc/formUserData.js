const createOptions = (options, elementIdToAppendOptions, optionToDisplayAsSelected) => {
    return Object.values(options).forEach(option => {
        if (option === optionToDisplayAsSelected) {
            return $(elementIdToAppendOptions).append(`<option selected value="${option}">${option}</option>`);
        } else {
            return $(elementIdToAppendOptions).append(`<option value="${option}">${option}</option>`);
        }
    })
}

const url = "https://restcountries.eu/rest/v2/all";

async function getCountriesData(url) {
    const response = await fetch(url);
    const data = await response.json();
    if (data) {
        showCountriesOptions(data);
    }
    return data;
}

function showCountriesOptions(data) {
    const countries = data.map(data => data.translations['br']);
    const id = "#vo_country";

    createOptions(countries, id, "Brasil");
}

function showLanguageOptions() {
    const languages = {
        PT: "Português-BR",
        EN: "Inglês",
        ES: "Espanhol"
    }
    const id = "#vo_language";

    createOptions(languages, id, "Brasil");
}

function showGenderOptions() {
    const genders = {
        0: "Prefiro não responder"
    }
    const id = "#vo_gender";
    createOptions(genders, id, "Prefiro não responder");

}

function showEthnicityOptions() {
    const ethnicities = {
        0: "Prefiro não responder"
    }
    const id = "#vo_ethnicity";

    createOptions(ethnicities, id, "Prefiro não responder");
}

function showPcdOptions() {
    const pcd = {
        0: "Não se aplica"
    }
    const id = "#vo_pcd";

    createOptions(pcd, id, "Não se aplica");
}

function getAcceptedTermsValue() {
    const element = document.getElementById("vo_accepted_terms");

    if(element.checked) {
        return true;
    } else {
        return false;
    }
}

const getValueOf = (id) => document.getElementById(id).value;

function postUserDataForm() {
    console.log("Post user data");
    const url = '/api/user/user-data';

    const user = {
        language: getValueOf("vo_language"),
        phone: getValueOf("vo_phone"),
        company: getValueOf("vo_company"),
        occupation: getValueOf("vo_occupation"),
        country: getValueOf("vo_country"),
        city: getValueOf("vo_city"),
        gender: getValueOf("vo_gender"),
        ethnicity: getValueOf("vo_ethnicity"),
        pcd: getValueOf("vo_pcd"),
        acceptTerms: getAcceptedTermsValue()
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
            console.log("Dados enviados com sucesso!");
        } else {
            console.log("Ocorreu algum problema durante o envio dos dados!");
        }
    });
}

getCountriesData(url);
showLanguageOptions();
showGenderOptions();
showEthnicityOptions();
showPcdOptions();