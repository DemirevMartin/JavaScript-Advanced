function solve(arr) {
    let data = {};

    for(const el of arr) {
        let [town, product, price] = el.split(' | ');
        price = Number(price);

        if(data.hasOwnProperty(product)) {
            if(data[product].price > price) {
                data[product].price = price;
                data[product].town = town;
            }
        }
        else {
            data[product] = {
                price,
                town
            }
        }
    }

    for(const [key, value] of Object.entries(data)) {
        console.log(`${key} -> ${value.price} (${value.town})`);
    }
}
// Sample Product -> 1000 (Sample Town)
// Orange -> 2 (Sample Town)
// Peach -> 1 (Sample Town)
// Burger -> 10 (New York)

solve(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']);