function calories(arr) {
    const data = {};
    for(let i = 0; i < arr.length; i += 2) {
        data[arr[i]] = Number(arr[i + 1]);
    }
    console.log(data);
}
calories(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);