const url ="https://restcountries.eu/rest/v2/all";

async function getCountriesData(url) {
        const response = await fetch(url);
        const data = await response.json();
        if(data) {
            showCountriesNames(data);
        }
        return data;
}

getCountriesData(url);

function showCountriesNames(data) {
    data.forEach(data => $("#vo_country").append(`<option value="${data.translations['br']}">${data.translations['br']}</option>`));
}