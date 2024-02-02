function create(words) {

   let content = document.querySelector('#content');

   words.forEach((word) => {
      let div = document.createElement('div');
      let paragraph = document.createElement('p');
      paragraph.textContent = word;

      paragraph.style.display = 'none';
      div.appendChild(paragraph);

      div.addEventListener('click', revealOnClick);

      content.appendChild(div);

   });

   function revealOnClick(e) {
      e.currentTarget.children[0].style.display = 'block';
   }
}