function biggest(m) {
    let max = m[0][0];
    for (let i = 0; i < m.length; i++) {
        for (let j = 0; j < m[0].length; j++) {
            if (max < m[i][j]) max = m[i][j];
        }
    }
    //console.log(max);
    return max;
}
biggest([[20, 50, 10],
    [8, 33, 145]]);

biggest([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]);