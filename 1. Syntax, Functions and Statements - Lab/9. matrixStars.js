function matrix(a) {
    for(let i = 1; i <= a; i++) {
        let row = '';
        for(let j = 1; j <= a; j++) {
            row += '* ';
        }
        console.log(row.trim());
    }
}
matrix(7);
matrix(5);
matrix(3);