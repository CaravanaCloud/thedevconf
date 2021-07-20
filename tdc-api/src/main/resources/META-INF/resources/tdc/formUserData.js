const createOptions = (options, elementIdToAppendOptions, optionToDisplayAsSelected) => {
    return Object.values(options).forEach(option => {
        if(option === optionToDisplayAsSelected) {
            return $(elementIdToAppendOptions).append(`<option selected value=${option}>${option}</option>`);
        } else {
            return $(elementIdToAppendOptions).append(`<option value=${option}>${option}</option>`);
        }
    })
}

const url ="https://restcountries.eu/rest/v2/all";

async function getCountriesData(url) {
    const response = await fetch(url);
    const data = await response.json();
    if(data) {
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

getCountriesData(url);
showLanguageOptions();
showGenderOptions();
showEthnicityOptions();
showPcdOptions();