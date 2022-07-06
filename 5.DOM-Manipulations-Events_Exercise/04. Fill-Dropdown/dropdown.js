function addItem() {
    let text = document.getElementById('newItemText');
    let val = document.getElementById('newItemValue');

    let option = document.createElement('option');
    option.text = text.value;
    option.value = val.value;

    let selector = document.getElementById('menu');
    selector.appendChild(option);

    text.value = '';
    val.value = '';
}