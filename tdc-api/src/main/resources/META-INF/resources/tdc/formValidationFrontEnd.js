function handleFormSubmit() {
    'use strict'

    const forms = document.querySelectorAll('.needs-validation');

    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                event.preventDefault();
                form.classList.add('was-validated');
                if (form.checkValidity()) {
                    postRegistrationForm();
                } else {
                    console.log("invalid data")
                    event.stopPropagation();
                }
            }, false)
        })
}

handleFormSubmit()