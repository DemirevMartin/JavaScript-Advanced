function extract(arr) {
    let result = []; 
    let last = arr[0];
    result.push(last);
    for(let i = 1; i < arr.length; i++) {
        const current = arr[i];
        if(current >= last) {
            result.push(current);
            last = current;
        }
    }
    return result;
}
extract([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]);
extract([20, 
    3, 
    2, 
    15,
    6, 
    1]);