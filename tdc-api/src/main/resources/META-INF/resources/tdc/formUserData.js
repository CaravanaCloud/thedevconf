const url ="https://restcountries.eu/rest/v2/all";

async function getCountriesData(url) {
    const response = await fetch(url);
    const data = await response.json();
    if(data) {
        showCountriesOptions(data);
    }
    return data;
}
const addSelectedOption = (id, value) => {
    return $(id).append(`<option selected value=${value}>${value}</option>`);
}

const addOptions = (id, value) => {
    return $(id).append(`<option value=${value}>${value}</option>`);
}

function showCountriesOptions(data) {
    const countries = data.map(data => data.translations['br']);

    countries.forEach(country => {
        const id = "#vo_country";
        if(country === "Brasil") {
            addSelectedOption(id, country);
        } else {
            addOptions(id, country);
        }
    });
}

function showLanguageOptions() {
    const languageOptions = {
        PT: "Português-BR",
        EN: "Inglês",
        ES: "Espanhol"
    }

    Object.values(languageOptions).forEach(language => {
        const id = "#vo_language";
        if (language === "Português-BR") {
            addSelectedOption(id, language);
        } else {
            addOptions(id, language);
        }
    });
}

function showGenderOptions() {
    const genderOptions = {
        0: "Prefiro não responder"
    }

    Object.values(genderOptions).forEach(gender => {
        const id = "#vo_gender";
        if(gender === "Prefiro não responder") {
            addSelectedOption(id, gender);
        } else {
            addOptions(id, gender);
        }});
}

function showEthnicityOptions() {
    const ethnicityOptions = {
        0: "Prefiro não responder"
    }
    Object.values(ethnicityOptions).forEach(ethnicity => {
        const id = "#vo_ethnicity";
        if(ethnicity === "Prefiro não responder") {
            addSelectedOption(id, ethnicity);
        } else {
            addOptions(id, ethnicity);
        }});
}

function showPcdOptions() {
    const pcdOptions = {
        0: "Não se aplica"
    }
    Object.values(pcdOptions).forEach(pcd => {
        const id = "#vo_pcd";
        if(pcd === "Não se aplica") {
            addSelectedOption(id, pcd);
        } else {
            addOptions(id, pcd);
        }});
}

getCountriesData(url);
showLanguageOptions();
showGenderOptions();
showEthnicityOptions();
showPcdOptions();