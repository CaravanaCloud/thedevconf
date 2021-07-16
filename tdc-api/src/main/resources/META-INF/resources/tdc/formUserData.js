const url ="https://restcountries.eu/rest/v2/all";

async function getCountriesData(url) {
    const response = await fetch(url);
    const data = await response.json();
    if(data) {
        showCountriesNamesOptions(data);
    }
    return data;
}

getCountriesData(url);

function showCountriesNamesOptions(data) {
    data.forEach(data => {
        if(data.translations['br'] === "Brasil") {
            $("#vo_country").append(`<option selected value="${data.translations['br']}">${data.translations['br']}</option>`);
        } else {
            $("#vo_country").append(`<option value="${data.translations['br']}">${data.translations['br']}</option>`);

        }
    });
}

function showLanguagesOptions() {
    const languages = {
        PT: "Português-BR",
        EN: "Inglês",
        ES: "Espanhol"
    };

    Object.values(languages).forEach(language => {
        if (language === "Português-BR") {
            $("#vo_language").append(`<option selected value="${language}">${language}</option>`);
        } else {
            $("#vo_language").append(`<option value ="${language}">${language}</option>`);
        }
    });
}

showLanguagesOptions();