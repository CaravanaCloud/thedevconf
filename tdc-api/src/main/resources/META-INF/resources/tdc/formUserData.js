const optionsManager = (options, elementIdToDisplayOptions, selectedOptionToShow) => {
    return Object.values(options).forEach(option => {
        if(option === selectedOptionToShow) {
            return $(elementIdToDisplayOptions).append(`<option selected value=${option}>${option}</option>`);
        } else {
            return $(elementIdToDisplayOptions).append(`<option value=${option}>${option}</option>`);
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

    optionsManager(countries, id, "Brasil");
}

function showLanguageOptions() {
    const languageOptions = {
        PT: "Português-BR",
        EN: "Inglês",
        ES: "Espanhol"
    }
    const id = "#vo_language";

    optionsManager(languageOptions, id, "Brasil");
}

function showGenderOptions() {
    const genderOptions = {
        0: "Prefiro não responder"
    }
    const id = "#vo_gender";
    optionsManager(genderOptions, id, "Prefiro não responder");

}

function showEthnicityOptions() {
    const ethnicityOptions = {
        0: "Prefiro não responder"
    }
    const id = "#vo_ethnicity";

    optionsManager(ethnicityOptions, id, "Prefiro não responder");
}

function showPcdOptions() {
    const pcdOptions = {
        0: "Não se aplica"
    }
    const id = "#vo_pcd";

    optionsManager(pcdOptions, id, "Não se aplica");
}

getCountriesData(url);
showLanguageOptions();
showGenderOptions();
showEthnicityOptions();
showPcdOptions();