function solve(arr) {
    // for(let i = 0; i < arr.length; i++) {
    //     if(i % 2 === 0) output.push(arr[i]);
    // }
    console.log(arr.filter((a, i) => i % 2 === 0).join(' '));
}
solve(['20', '30', '40', '50', '60']);