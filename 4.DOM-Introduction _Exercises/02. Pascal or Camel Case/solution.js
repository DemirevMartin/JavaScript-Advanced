function solve() {
    const text = document.getElementById('text').value.split(' ').map(a => a.toLowerCase());
    const c = document.getElementById('naming-convention').value;

    let arr = [];
    let n = 0;
    if(c === 'Camel Case') {
        n = 1;
        arr.push(text[0]);
    } else if(c === 'Pascal Case') {
        n = 0;
    } else {
       document.getElementById('result').textContent += 'Error!';
       return;
    }

    for(let i = n; i < text.length; i++) {
        const current = text[i][0].toUpperCase() + text[i].substring(1, text[i].length);
        arr.push(current);
    }
    document.getElementById('result').textContent += arr.join('');
}