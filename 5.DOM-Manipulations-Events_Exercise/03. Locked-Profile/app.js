function lockedProfile() {
    Array.from(document.querySelectorAll('.profile button'))
        .forEach(b => b.addEventListener('click', onClick));
    
    function onClick(e) {
        let profile = e.target.parentElement;
        let locked = profile.querySelector('input').checked;
        let secrets = profile.querySelector('div');
        if(e.target.textContent === 'Show more') {
            if(!locked) {
                secrets.style.display = 'block';
                e.target.textContent = 'Hide it';
            }
        } else if (!locked) {
            secrets.style.display = 'none';
            e.target.textContent = 'Show more';
        }
    }
}