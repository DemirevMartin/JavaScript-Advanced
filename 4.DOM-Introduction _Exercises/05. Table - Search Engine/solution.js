function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   
   function onClick() {
       // clear changed rows
       const fields = document.querySelectorAll('tbody tr');
       const trs = Array.from(fields);
       for(let i = 0; i < trs.length; i++) {
           fields[i].classList.remove('select');
       }

       const search = document.getElementById('searchField').value;
       const arrFields = Array.from(document.querySelectorAll('tbody tr td'));
       let rows = [];
       for(let i = 0; i < arrFields.length; i += 3) {
           const a = arrFields[i].textContent;
           const b = arrFields[i + 1].textContent;
           const c = arrFields[i + 2].textContent;
           if(a.includes(search) || b.includes(search) || c.includes(search)) {
               rows.push(Math.floor((i + 2) / 3));
           }
       }

       for(const row of rows) {
           fields[row].classList.add('select');
       }
   }
}