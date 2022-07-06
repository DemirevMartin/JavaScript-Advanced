function solve(arr) {
    let x = [];
    arr.sort((a, b) => a - b);
    const mins = arr.slice(0, Math.ceil(arr.length / 2));
    const maxs = arr.slice(Math.ceil(arr.length / 2)).reverse();
    for(let i = 0; i < Math.ceil(arr.length / 2); i++) {
        if(i === maxs.lenght + 1) {
            x.push(mins[i]);
        }
        else {
            x.push(mins[i]);
            x.push(maxs[i]);
        }
    }
    return x;
}
solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);