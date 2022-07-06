function validate(x1, y1, x2, y2) {
    let b1 = Number.isInteger(Math.sqrt(x1 ** 2 + y1 ** 2));
    if(b1) console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    else console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);

    let b2 = Number.isInteger(Math.sqrt(x2 ** 2 + y2 ** 2));
    if(b2) console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    else console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);

    let b3 = Number.isInteger(Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2));
    if(b3) console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    else console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
}
validate(3, 0, 0, 4);
validate(2, 1, 1, 1);