function solve(arr) {
    arr.shift();
    let output = [];
    for(let el of arr) {
        el = el.split('').slice(2, el.length - 2).join('');
        const current = el.split(' | ');
        const Town = current[0];
        const Latitude = Number(Number(current[1]).toFixed(2));
        const Longitude = Number(Number(current[2]).toFixed(2));
        let data = {
            Town,
            Latitude,
            Longitude
        };
        output.push(data);
    }
    console.log(JSON.stringify(output));
}
solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']);
