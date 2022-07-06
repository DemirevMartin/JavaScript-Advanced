function solve(arr) {
    let n = 1;
    let result = [];
    for(const el of arr) {
        if(el === 'add') {
            result.push(n);
        } else if(el === 'remove') {
            result.pop();
        }
        n++;
    }
    if(result.length <= 0) console.log('Empty');
    console.log(result.join('\n'));
}
solve(['add', 
'add', 
'remove', 
'add', 
'add']);

solve(['remove', 
'remove', 
'remove']);