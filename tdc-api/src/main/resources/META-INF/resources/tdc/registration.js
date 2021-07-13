console.log("Sample Registration Page");
const vo = null;

function postForm() {
    const params = {"clientId":vo.clientId};
    const url = '/api/user/registration?' + new URLSearchParams(params).toString();

    vo.name = document.getElementById("vo_name").value;
    vo.language = document.getElementById("vo_language").value;
    vo.email = document.getElementById("vo_email").value;
    vo.phone = document.getElementById("vo_phone").value;
    vo.company = document.getElementById("vo_company").value;
    vo.occupation = document.getElementById("vo_occupation").value;
    vo.country = document.getElementById("vo_country").value;
    vo.city = document.getElementById("vo_city").value;
    vo.gender = document.getElementById("vo_gender").value;
    vo.ethnicity = document.getElementById("vo_ethnicity").value;
    vo.pcd = document.getElementById("vo_pcd").value;
    vo.acceptedTerms = Boolean(document.getElementById("vo_accepted_terms").value);

    fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(vo)
    }).then(response => response.json())
        .then(data => paint(data));
    console.log("fetch data");
}

function paint(registration) {
    const time = toLocalString(registration.createTime);
    replaceClass("createTime", registration.createTime);
    vo = registration;
}

function load(clientId) {
    log("Registering Client "+ clientId);

    const params = {"clientId":clientId};
    const url = '/api/user/registration?' + new URLSearchParams(params).toString();

    fetch(url)
        .then(response => response.json())
        .then(data => paint(data));
}

onClientReady(load);

function handleFormSubmit() {
  'use strict'

  const forms = document.querySelectorAll('.needs-validation');

  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        event.preventDefault();
        form.classList.add('was-validated');
        if (form.checkValidity()) {
        postForm();
        } else {
            event.stopPropagation();
        }
      }, false)
    })
}

handleFormSubmit()