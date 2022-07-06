function list(arr) {
    arr.sort((x, y) => x.localeCompare(y));
    for (let i = 0; i < arr.length; i++) {
        console.log(`${i + 1}.${arr[i]}`);
    }
}
list(["John", "Bob", "Christina", "Ema"]);