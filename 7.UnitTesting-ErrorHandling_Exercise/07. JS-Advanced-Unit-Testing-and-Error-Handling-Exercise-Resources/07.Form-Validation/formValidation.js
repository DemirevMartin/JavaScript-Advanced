function validate() {
    const submit = document.getElementById('submit');

    let company = document.getElementById('company');
    let fieldset = document.getElementById('companyInfo');
    
    let isCompany = false;

    company.addEventListener('click', () => {
        if(company.checked) {
            fieldset.style.display = 'block';
            isCompany = true;
        } else {
            fieldset.style.display = 'none';
            isCompany = false;
        }
    });

    submit.addEventListener('click', onClick);

    function onClick(e) {
        e.preventDefault();
        let invalidFields = [];

        let username = document.getElementById('username');
        let email = document.getElementById('email');
        let again = document.getElementById('confirm-password');
        let password = document.getElementById('password');

        const patternUsername = /^[a-zA-Z0-9]{3,20}$/;
        const patternPass = /^\w{5,15}$/;
        const patternEmail = /^.*\@.*\..*$/;
        const patternNum = /[1-9][0-9]{3}/;

        if(!username.value.match(patternUsername)) {
            invalidFields.push(username);
        }

        if(!email.value.match(patternEmail)) {
            invalidFields.push(email);
        }

        if(!(password.value.match(patternPass) && password.value === again.value)) {
            invalidFields.push(password);
        }

        if(isCompany) {
            let companyNumber = document.getElementById('companyNumber');
            if(!companyNumber.value.match(patternNum)) {
                invalidFields.push(companyNumber);
            }
        }

        let validate = document.getElementById('valid');
        if(invalidFields.length > 0) { 
            validate.style.display = 'block';
            invalidFields.forEach(x => x.style.borderColor = 'red');
        }
        else validate.style.display = 'none';
    }
}

// 	The username needs to be between 3 and 20 symbols inclusively and only letters and numbers are allowed.
//	The password and confirm-password must be between 5 and 15 inclusively symbols and only word characters are allowed 
//  (letters, numbers, and _).
//  The inputs of the password and confirm-password field must match.
//	The email field must contain the “@” symbol and at least one "."(dot) after it.

// 	The Company Number field must be a number between 1000 and 9999.
//	Use addEventListener() function to attach an event listener for the "change" event to the checkbox.