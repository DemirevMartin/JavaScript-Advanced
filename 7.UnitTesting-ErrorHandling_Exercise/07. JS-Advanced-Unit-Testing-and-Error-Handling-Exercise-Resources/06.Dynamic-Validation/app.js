function validate() {
    const email = document.getElementById('email');
    email.addEventListener('change', onChange);

    function onChange(ev) {
        const pattern = /^.*@.*\..*$/;
        const input = email.value;
        if(input.match(pattern)) {
            ev.target.className = '';
        } else {
            ev.target.className = 'error';
        }
    }
}