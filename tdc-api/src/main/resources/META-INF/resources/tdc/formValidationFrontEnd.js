function mustBeEquals(event, idField1, idField2) {
    const field1 = document.getElementById(idField1);
    const field2 = document.getElementById(idField2);
    if (field1.checkValidity()) {
        if (field1.value == field2.value) {
            field2.setCustomValidity('');
            return;
        } else {
            field2.setCustomValidity('invalid');
            return;
        }
    }
    console.log(`field ${idField1} is not equals to ${idField2}`)
    field2.setCustomValidity('invalid');
}

function handleFormSubmit(formType) {
    'use strict'

    const forms = document.querySelectorAll('.needs-validation');

    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                event.preventDefault();
                form.classList.add('was-validated');
                if (form.checkValidity()) {
                    if (formType === 'user-data-form') {
                        postUserDataForm();
                    }
                    if (formType === 'registration-form') {
                        postRegistrationForm();
                    }
                } else {
                    console.log("invalid data")
                    event.stopPropagation();
                }
            }, false)
        })
}