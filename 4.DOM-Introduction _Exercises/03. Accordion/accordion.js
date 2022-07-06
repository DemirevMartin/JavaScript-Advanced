function toggle() {
    if(document.getElementsByClassName('button')[0].textContent === 'Less') {
        document.getElementById('extra').style.display = 'none';
        document.getElementsByClassName('button')[0].textContent = 'More';
    } else {
        document.getElementById('extra').style.display = 'inline';
        document.getElementsByClassName('button')[0].textContent = 'Less';
    }
}