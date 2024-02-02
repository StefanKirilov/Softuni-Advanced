function toggle() {
    let text = document.getElementById('extra');
    let btn = document.querySelector('.button');

    btn.textContent = btn.textContent === 'More' ? 'Less' : 'More';
    text.style.display = text.style.display === 'none' || 
    text.style.display === ''
     ? (text.style.display = 'block')
     : text.style.display = 'none';

}