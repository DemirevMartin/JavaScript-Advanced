function solve(input) {
    input.engine = {};
    if(input.power <= 90) {
        input.engine.power = 90;
        input.engine.volume = 1800;
    } else if(input.power <= 120) {
        input.engine.power = 120;
        input.engine.volume = 2400;
    } else {
        input.engine.power = 200;
        input.engine.volume = 3500;
    }
    delete input.power;

    const t = input.carriage;
    const c = input.color;
    delete input.carriage;
    input.carriage = {};
    if(t === 'hatchback') {
        input.carriage.type = t;
        input.carriage.color = c;
    } else if(t === 'coupe') {
        input.carriage.type = t;
        input.carriage.color = c;
    }
    delete input.color;

    if(input.wheelsize % 2 === 0) input.wheelsize -= 1;
    const x = input.wheelsize;
    delete input.wheelsize;
    input.wheels = [x, x, x, x];
    return input;
}
// {
//     model: 'Ferrari',
//     engine: {power: 200, volume: 3500},
//     carriage: {type: 'coupe', color: 'red'},
//     wheels: [21, 21, 21, 21]
// };
solve(input = {
        model: 'Ferrari',
        power: 200,
        color: 'red',
        carriage: 'coupe',
        wheelsize: 21
});