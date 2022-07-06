function solve(arr) {
    const data = {};
    for(const el of arr) {
        const current = el.split(' <-> ');
        town = current[0];
        population = Number(current[1]);

        if(data.hasOwnProperty(town)) {
            population += data[town];
        }
        data[town] = population;
    }

    for(const [key, value] of Object.entries(data)) {
        console.log(`${key} : ${value}`);
    }
}
solve(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']);