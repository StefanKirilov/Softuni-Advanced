window.addEventListener('load', solution);

function solution() {
  
  let fNameInput = document.getElementById('fname');
  let emailInput = document.getElementById('email');
  let numberInput = document.getElementById('phone');
  let addressInput = document.getElementById('address');
  let codeInput = document.getElementById('code');
  let btnSubmit = document.getElementById('submitBTN');
  let ulInfo = document.getElementById('infoPreview');
  let btnEdit = document.getElementById('editBTN');
  let btnContinue = document.getElementById('continueBTN');
  let blockDiv = document.getElementById('block');

  btnSubmit.addEventListener('click', submitInfo);

  function submitInfo(e){

    e.preventDefault();

    let fNameValue = fNameInput.value;
    let emailValue = emailInput.value;
    let numberValue = numberInput.value;
    let addressValue = addressInput.value;
    let codeValue = codeInput.value;

    if(fNameValue == '' || emailValue == ''){
      return
    }

    let li1 = document.createElement('li');
    li1.textContent = `Full Name: ${fNameValue}`;
    let li2 = document.createElement('li');
    li2.textContent = `Email: ${emailValue}`;
    let li3 = document.createElement('li');
    li3.textContent = `Phone Number: ${numberValue}`;
    let li4 = document.createElement('li');
    li4.textContent = `Address: ${addressValue}`;
    let li5 = document.createElement('li');
    li5.textContent = `Postal Code: ${codeValue}`;
    
    ulInfo.appendChild(li1);
    ulInfo.appendChild(li2);
    ulInfo.appendChild(li3);
    ulInfo.appendChild(li4);
    ulInfo.appendChild(li5);

    btnSubmit.setAttribute('disabled', 'disabled');
    btnEdit.removeAttribute('disabled');
    btnEdit.addEventListener('click', function (e){
      e.preventDefault();


    fNameInput.value = fNameValue;
    emailInput.value = emailValue;
    numberInput.value= numberValue;
    addressInput.value = addressValue;
    codeInput.value = codeValue;


      btnSubmit.removeAttribute('disabled');
      btnEdit.setAttribute('disabled', 'disabled');
      btnContinue.setAttribute('disabled', 'disabled');

      let lis = Array.from(ulInfo.querySelectorAll('li')).forEach(li => ulInfo.removeChild(li));

      
    })
    btnContinue.removeAttribute('disabled');
    btnContinue.addEventListener('click', function (e){
      e.preventDefault();

      while (blockDiv.firstChild) {
        blockDiv.removeChild(blockDiv.lastChild);
    }

      let h3 = document.createElement('h3');
      h3.textContent = "Thank you for your reservation!";
      blockDiv.appendChild(h3);

    })

    fNameInput.value = '';
    emailInput.value = '';
    numberInput.value= '';
    addressInput.value = '';
    codeInput.value = '';

  }

}
