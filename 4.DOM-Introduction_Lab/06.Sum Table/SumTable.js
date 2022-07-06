function sumTable() {
    const tr = Array.from(document.querySelectorAll('tr')).slice(1, -1);
    let sum = 0;
    for(const row of tr) {
        const current = Number(row.lastChild.textContent);
        sum += current;
    }
    document.getElementById('sum').textContent = sum.toString();
}