function sumDiagonals(m) {
    let a = 0;
    let op = 0;
    for(let i = 0; i < m.length; i++) {
        a += m[i][i];
    }

    let j = m.length - 1;
    for(let i = 0; i < m.length; i++) {
        op += m[i][j];
        j--;
    }

    console.log(`${a} ${op}`);
}
sumDiagonals([[20, 40],
              [10, 60]]);

sumDiagonals([[3, 5, 17],
              [-1, 7, 14],
              [1, -8, 89]]);