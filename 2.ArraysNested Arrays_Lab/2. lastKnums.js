function last(n, k) {
    let arr = [1, 1];
    while(n > 2) {
        arr.push(arr.slice(-k).reduce((a, b) => a + b));
        n--;
    }
    return arr;
}
last(6, 3);
last(8, 2);