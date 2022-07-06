function solve(arr) {
    arr.sort((a, b) => a.localeCompare(b));

    let current = arr[0][0];
    console.log(current);
    function getLetter(letter) {
        if(letter !== current) {
            current = letter;
            console.log(current);
        }
    }

    let catalogue = {};
    for(const el of arr) {
        const [product, price] = el.split(' : ');
        if(!catalogue.hasOwnProperty(product)) {
            catalogue[product] = price;
        }
    }

    for(const [key, value] of Object.entries(catalogue)) {
        getLetter(key[0]);
        console.log(`  ${key}: ${value}`);
    }
}
solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']);