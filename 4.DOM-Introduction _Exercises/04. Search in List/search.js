function search() {
    const lists = document.getElementById('towns').children; //NOT ITERABLE!!!
    let elements = Array.from(lists);
    for(let el of elements) {
        el.style.fontWeight = 'normal';
        el.style.textDecoration = 'none';
    }
    const search = document.getElementById('searchText').value;

    let result = [];
    let counter = 0;
    for(let i = 0; i < elements.length; i++) {
        const current = lists[i].textContent;
        if(current.includes(search)) {
            result.push(current);
            lists[i].style.fontWeight = 'bold';
            lists[i].style.textDecoration = 'underline';
            counter++;
        }
    }
    document.getElementById('result').textContent = `${counter} matches found`;
}