function addItem() {

    let text = document.getElementById("newItemText");
    let value = document.getElementById("newItemValue");
    let menu = document.getElementById("menu");

    let optionElement = document.createElement("option");
    optionElement.textContent = text.value;
    optionElement.value = value.value;

    menu.appendChild(optionElement);

    text.value = '';
    value.value = '';
}