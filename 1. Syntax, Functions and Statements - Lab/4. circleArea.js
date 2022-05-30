function calc(x) {
    let type = typeof(x);
    if(type === 'number') {
        console.log((x ** 2 * Math.PI).toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${type}.`);
    }
}
calc(5);
calc('name');
calc(undefined);