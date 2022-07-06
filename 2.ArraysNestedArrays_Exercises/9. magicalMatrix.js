function solve(m) {
    let isMagic = true;
    const sum = m[0].reduce((a, b) => a + b);
    for (let i = 0; i < m.length; i++) {
        const current = m[i].reduce((a, b) => a + b);
        if(sum !== current) { isMagic = false; break; }
    }
    if(!isMagic) return false;
    for (let j = 0; j < m[0].length; j++) {
        let column = []
        for(let i = 0; i < m.length; i++) {
            column.push(m[i][j]);
        }
        const current = column.reduce((a, b) => a + b);
        if(sum !== current) { isMagic = false; break; }
    } 
    if(!isMagic) return false;
    return true;
}
solve([[4, 5, 6],
       [6, 5, 4],
       [5, 5, 5]]);