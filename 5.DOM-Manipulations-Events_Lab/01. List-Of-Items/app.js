function addItem() {
    let ul = document.getElementById('items');
    let li = document.createElement('li');
    let input = document.getElementById('newItemText');
    li.textContent = input.value;
    ul.appendChild(li);
    input.value = '';
}