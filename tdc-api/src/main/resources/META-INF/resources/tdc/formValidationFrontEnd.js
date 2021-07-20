function handleFormSubmit(formType) {
    'use strict'

    const forms = document.querySelectorAll('.needs-validation');

    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                event.preventDefault();
                form.classList.add('was-validated');
                if (form.checkValidity()) {
                    if(formType === 'user-data-form') {
                        postUserDataForm();
                    }
                    if(formType === 'registration-form') {
                        postRegistrationForm();
                    }
                } else {
                    console.log("invalid data")
                    event.stopPropagation();
                }
            }, false)
        })
}