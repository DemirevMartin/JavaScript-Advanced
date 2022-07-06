function create(words) {
   let content = document.getElementById('content');
   
   for (const el of words) {
      let div = document.createElement('div');
      let p = document.createElement('p');
      p.textContent = el;
      p.style.display = 'none';

      div.appendChild(p);
      content.appendChild(div);

      div.addEventListener('click', onClick);
      function onClick(e) {
         e.target.children[0].style.display = 'block';
      }
   }
}