function aggr(arr) {
    let sum = arr.reduce((a, b) => a + b);
    let inverse = arr.reduce((a, b) => a + 1/b) - arr[0] + 1/arr[0];
    let concat = arr.join('');

    console.log(sum);
    console.log(inverse);
    console.log(concat);
}
aggr([1, 2, 3]);
aggr([2, 4, 8, 16]);