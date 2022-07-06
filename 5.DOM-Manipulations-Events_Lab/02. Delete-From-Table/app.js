function deleteByEmail() {
    const email = document.querySelector('input').value;
    let data = document.querySelectorAll('tr td:nth-child(2)');
    let found = false;
    //2nd variant: let data = document.querySelectorAll('table tr');

    for(let td of data) {
        if(td.textContent === email) { //... if(data.children[1]) - where children[1] selects all second tds ...
            let row = td.parentNode;
            row.parentNode.removeChild(row);
            found = true;
        }
    }

    let output = document.getElementById('result');
    found ? output.textContent = 'Deleted.' : output.textContent = 'Not found.';
}