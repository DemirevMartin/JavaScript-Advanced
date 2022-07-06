function display(x) {
    let isSame = Boolean;
    x = x.toString();
    for(let i = 1; i < x.length; i++) {
        if(x[0] != x[i]) { isSame = false; break; }
    }
    if(isSame) console.log('true');
    else console.log('false');
    console.log(x.split('').map(Number).reduce((a, b) => a + b));
}
display(2222222);
display(12345);