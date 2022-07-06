function countNeighbours(m) {
    let counter = 0;
    for(let i = 0; i < m.length; i++) {
        for(let j = 0; j < m[0].length; j++) {
            const current = m[i][j];
            if(i + 1 < m.length && current === m[i + 1][j]) {
                counter++;
            }
            if(j + 1 < m[0].length && current === m[i][j + 1]) {
                counter++;
            }
        }
    }
    //console.log(counter);
    return counter;
}
// countNeighbours([['2', '3', '4', '7', '0'],
//                  ['4', '0', '5', '3', '4'],
//                  ['2', '3', '5', '4', '2'],
//                  ['9', '8', '7', '5', '4']]);

// countNeighbours([['test', 'yes', 'yo', 'ho'],
//                  ['well', 'done', 'yo', '6'],
//                  ['not', 'done', 'yet', '5']]);

countNeighbours([[2, 2, 5, 7, 4],
                 [4, 0, 5, 3, 4],
                 [2, 5, 5, 4, 2]]);