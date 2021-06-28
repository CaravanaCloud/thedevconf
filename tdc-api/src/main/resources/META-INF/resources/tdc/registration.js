console.log("Sample Registration Page");
var vo = null;

function postForm() {
    var params = {"clientId":vo.clientId};
    var url = '/api/user/registration?' + new URLSearchParams(params).toString();

    vo.data = document.getElementById("vo_data").value;

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
    var time = toLocalString(registration.createTime);
    replaceClass("createTime", registration.createTime);
    vo = registration;
}

function load(clientId) {
    log("Registering Client "+ clientId);

    var params = {"clientId":clientId};
    var url = '/api/user/registration?' + new URLSearchParams(params).toString();

    fetch(url)
        .then(response => response.json())
        .then(data => paint(data));
}

onClientReady(load);

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()