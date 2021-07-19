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
    data.forEach(data => {
        if(data.translations['br'] === "Brasil") {
            $("#vo_country").append(`<option selected value="${data.translations['br']}">${data.translations['br']}</option>`);
        }
        $("#vo_country").append(`<option value="${data.translations['br']}">${data.translations['br']}</option>`);
    });
}

function showLanguageOptions() {
    const languageOptions = {
        PT: "Português-BR",
        EN: "Inglês",
        ES: "Espanhol"
    }

    Object.values(languageOptions).forEach(language => {
        if (language === "Português-BR") {
            $("#vo_language").append(`<option selected value="${language}">${language}</option>`);
        }
        $("#vo_language").append(`<option value ="${language}">${language}</option>`);
    });
}

function showGenderOptions() {
    const genderOptions = {
        P: "Prefiro não responder"
    }

    Object.values(genderOptions).forEach(gender => {
        if(gender === "Prefiro não responder") {
            $("#vo_gender").append(`<option selected value="${gender}">${gender}</option>`);
        }
        $("#vo_gender").append(`<option value="${gender}">${gender}</option>`);
    });
}

getCountriesData(url);
showLanguageOptions();
showGenderOptions()