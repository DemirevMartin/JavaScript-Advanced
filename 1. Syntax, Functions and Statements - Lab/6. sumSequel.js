function sequel(a, b) {
    let sum = 0;
    for(let i = Number(a); i <= Number(b); i++) {
        sum += i;
    }
    console.log(sum);
}
sequel('1', '5');
sequel('-8', '20');