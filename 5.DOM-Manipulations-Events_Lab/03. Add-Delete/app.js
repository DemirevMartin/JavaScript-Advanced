function addItem() {
    const input = document.getElementById('newItemText');

    const liElement = document.createElement('li');
    liElement.textContent = input.value;

    const deleteAnchor = document.createElement('a');
    deleteAnchor.textContent = '[Delete]';
    deleteAnchor.href = '#';
    liElement.appendChild(deleteAnchor);

    deleteAnchor.addEventListener('click', onDelete);

    document.getElementById('items').appendChild(liElement);

    function onDelete(ev) {
        ev.target.parentElement.remove();
    }

    input.value = '';
}