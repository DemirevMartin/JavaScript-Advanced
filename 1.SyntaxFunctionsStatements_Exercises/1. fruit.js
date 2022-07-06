function buy(fruit, g, p) {
    let weight = g / 1000;
    let money = (weight * p).toFixed(2);
    console.log(`I need $${money} to buy ${weight.toFixed(2)} kilograms ${fruit}.`);
}
buy('orange', 2500, 1.80);
buy('apple', 1563, 2.35);