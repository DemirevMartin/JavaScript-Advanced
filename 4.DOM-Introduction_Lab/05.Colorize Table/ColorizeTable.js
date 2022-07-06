function colorize() {
    let t = document.querySelectorAll('table tr:nth-child(2n)');
    for(let tr of t) {
        tr.style.backgroundColor = 'teal';
    }
}