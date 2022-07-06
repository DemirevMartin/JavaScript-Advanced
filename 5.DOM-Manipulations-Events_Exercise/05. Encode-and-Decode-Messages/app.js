function encodeAndDecodeMessages() {
    let textarea = document.getElementsByTagName('textarea');

    let button = document.getElementsByTagName('button');
    let send = button[0];
    let receive = button[1];

    send.addEventListener('click', encrypt);
    receive.addEventListener('click', decrypt);

    function encrypt() {
        let message = '';
        let decoded = textarea[0].value;
        for(let i = 0; i < decoded.length; i++) {
            let current = decoded.charCodeAt(i) + 1;
            let newLetter = String.fromCharCode(current);
            message += newLetter;
        }
        textarea[1].value = message;
        textarea[0].value = '';
    }

    function decrypt() {
        let message = '';
        let encoded = textarea[1].value;
        for(let i = 0; i < encoded.length; i++) {
            let current = encoded.charCodeAt(i) - 1;
            let newLetter = String.fromCharCode(current);
            message += newLetter;
        }
        textarea[1].value = message;
    }
}