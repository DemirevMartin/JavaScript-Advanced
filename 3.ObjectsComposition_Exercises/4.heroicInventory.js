function solve(arr) {
    let output = [];
    for(const el of arr) {
        let [name, level, items] = el.split(' / ');
        level = Number(level);
        if(items !== undefined) items = items.split(', ');
        else items = [];
        const data = {
            name,
            level,
            items
        }
        output.push(data);
    }
    console.log(JSON.stringify(output));
}
solve(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 /',
'Hes / 1 / Desolator, Sentinel, Antara']);