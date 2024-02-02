function search() {
    let towns = document.querySelectorAll('#towns li');
    let inputValue = document.querySelector('input').value;
 
    let result = document.getElementById('result');
 
    let sum = 0;
 
    for (const li of towns) {
       let inputToLower = inputValue.toLowerCase();
       let TextToLower = li.textContent.toLowerCase();
 
       if(TextToLower.includes(inputToLower)){
          li.style.fontWeight = 'bold';
          li.style.textDecoration = 'underline'
 
          sum++;
       }
       else{
          li.style.fontWeight = '';
          li.style.textDecoration = ''
       }
    }
 
    result.textContent = `${sum} matches found`;
 
 
 }