window.addEventListener('load', solve);

function solve() {
    // 1.	Getting and adding the information about a new song
    let boxGenre = document.getElementById('genre');
    let boxName = document.getElementById('name');
    let boxAuthor = document.getElementById('author');
    let boxDate = document.getElementById('date');

    let btnAdd = document.getElementById('add-btn');
    btnAdd.addEventListener('click', onAdd);
    let add = document.getElementsByClassName('all-hits-container')[0];

    function onAdd(e) {
        e.preventDefault();
        let genre = boxGenre.value;
        let name = boxName.value;
        let author = boxAuthor.value;
        let date = boxDate.value;

        if(genre !== '' && name !== '' && author !== '' && date !== '') {
            let div = document.createElement('div');
            div.classList.add('hits-info');
            div.innerHTML = 
                `<img src="./static/img/img.png">
                <h2>Genre: ${genre}</h2>
                <h2>Name: ${name}</h2>
                <h2>Author: ${author}</h2>
                <h3>Date: ${date}</h3>
                <button class="save-btn">Save song</button>
                <button class="like-btn">Like song</button>
                <button class="delete-btn">Delete</button>`;
            add.appendChild(div);
    
            boxGenre.value = '';
            boxName.value = '';
            boxAuthor.value = '';
            boxDate.value = '';
    
            let current = add.lastElementChild;
            let btnSave = current.getElementsByClassName('save-btn')[0];
            btnSave.addEventListener('click', onSave);
            let btnLike = current.getElementsByClassName('like-btn')[0];
            btnLike.addEventListener('click', onLike);
            let btnDelete = current.getElementsByClassName('delete-btn')[0];
            btnDelete.addEventListener('click', onDelete);
        }
    }

    // 2.   Like songs
    let like = document.getElementsByClassName('likes')[0];
    function onLike(e) {
        e.preventDefault();
        let p = like.firstElementChild;
        const text = p.textContent.split(': ');
        const countLikes = Number(text[1]) + 1;
        p.textContent = `${text[0]}: ${countLikes}`;
        e.target.disabled = true;
    }

    // 3.   Save songs
    let save = document.getElementsByClassName('saved-container')[0];
    function onSave(e) {
        e.preventDefault();
        let div = e.target.parentElement;
        let genre = div.getElementsByTagName('h2')[0].textContent.split('Genre: ')[1];
        let name = div.getElementsByTagName('h2')[1].textContent.split('Name: ')[1];
        let author = div.getElementsByTagName('h2')[2].textContent.split('Author: ')[1];
        let date = div.getElementsByTagName('h3')[0].textContent.split('Date: ')[1]; 

        let newDiv = document.createElement('div');
        newDiv.classList.add('hits-info');
        newDiv.innerHTML = 
            `<img src="./static/img/img.png">
            <h2>Genre: ${genre}</h2>
            <h2>Name: ${name}</h2>
            <h2>Author: ${author}</h2>
            <h3>Date: ${date}</h3>
            <button class="delete-btn">Delete</button>`;
        save.appendChild(newDiv);
        add.removeChild(div);

        let btnDelete = newDiv.getElementsByClassName('delete-btn')[0];
        btnDelete.addEventListener('click', onDelete);
    }

    // 4.   Delete songs
    function onDelete(e) {
        e.preventDefault();
        let current = e.target.parentElement;
        let container = current.parentElement;
        container.removeChild(current);
    }
}