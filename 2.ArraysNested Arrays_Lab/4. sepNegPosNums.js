function separate(arr) {
    let output = []
    for(let el of arr) {
        if (el < 0) output.unshift(el);
        else output.push(el);
    }
    console.log(output.join('\n'));
}
separate([7, -2, 8, 9]);
separate([3, -2, 0, -1]);