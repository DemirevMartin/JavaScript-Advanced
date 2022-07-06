function validate() {
    // If the input is invalid, apply the class "error". 
    // Do not validate on every keystroke, as it is annoying for the user, consider only change events.
    // A valid email is considered to be in the format: <name>@<domain>.<extension>
    // Only lowercase Latin characters are allowed for any of the parts of the email. 
    // If the input is valid, clear the style. Submit only the validate() function in Judge.

    const email = document.getElementById('email');
    email.addEventListener('change', onChange);

    function onChange(ev) {
        const pattern = /^([a-z]+)@([a-z]+)\.([a-z]+)$/;
        const input = email.value;
        if(input.match(pattern)) {
            ev.target.className = '';
        } else {
            ev.target.className = 'error';
        }
    }
}