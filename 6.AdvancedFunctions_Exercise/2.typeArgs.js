function solve() {
    const unknown = Array.from(arguments);
    let data = {};
    for(const x of unknown) {
        const t = typeof x;
        console.log(`${t}: ${x}`);
        if(data.hasOwnProperty(t)) data[t]++;
        //else if (x === undefined) data[undefined] = 1;
        else data[t] = 1;
    }

    const entries = Object.entries(data).sort((a, b) => b[1] - a[1]);
    for(const [key, value] of entries) {
        console.log(`${key} = ${value}`);
    }
}
solve('cat', 42, function () { console.log('Hello world!'); }, undefined);
// solve({ name: 'bob'}, 3.333, 9.999);