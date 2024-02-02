function solve() {
  let text = document.getElementById('text').value.toLowerCase();
  let naming = document.getElementById('naming-convention').value;
  let result = document.getElementById('result');

  if (naming !== 'Camel Case' && naming !== 'Pascal Case'){
    result.textContent = "Error!";
    return;
  }

    let arrOfStrings = text.split(' ');
    let output = '';
    let startingPoint = 0;

    if(naming === 'Camel Case'){
      output += arrOfStrings[0];
      startingPoint = 1;
    }

    for (let i = startingPoint; i < arrOfStrings.length; i++) {
      output += arrOfStrings[i][0].toUpperCase() + arrOfStrings[i].slice(1 , arrOfStrings[i].length);
      result.textContent = output; 
    }

  }
