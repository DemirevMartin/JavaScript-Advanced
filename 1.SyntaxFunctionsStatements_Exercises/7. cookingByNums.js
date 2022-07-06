function cook(n, a, b, c, d, e) {
    // •	chop - divide the number by two
    // •	dice - square root of a number
    // •	spice - add 1 to the number
    // •	bake - multiply number by 3
    // •	fillet - subtract 20% from the number
    const commands = [a, b, c, d, e];
    for(let i = 0; i < commands.length; i++) {
        const current = commands[i];
        if(current === 'chop') {
            n /= 2;
        } else if (current === 'dice') {
            n = Math.sqrt(n);
        } else if (current === 'spice') {
            n += 1;
        } else if (current === 'bake') {
            n *= 3;
        } else {
            n -= n * 20 / 100;
        }
        console.log(n);
    }
}
cook('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cook('9', 'dice', 'spice', 'chop', 'bake', 'fillet');