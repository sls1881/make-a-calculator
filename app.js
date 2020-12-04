// add calculator variables
const addInput1 = document.getElementById('add-input-1');
const addInput2 = document.getElementById('add-input-2');
const addButton = document.getElementById('add-button');
const addResult = document.getElementById('add-result');

//subtract calculator variables 
const subtractInput1 = document.getElementById('subtract-input-1');
const subtractInput2 = document.getElementById('subtract-input-2');
const subtractButton = document.getElementById('s-button');
const subtractResult = document.getElementById('subtract-result');

// set event listeners, add
addButton.addEventListener('click', () => {

const number1 = Number(addInput1.value);
const number2 = Number(addInput2.value);
const result = number1 + number2;

addResult.textContent = result;
});

// set event listeners, subtract
subtractButton.addEventListener('click', () => {

    const number3 = Number(subtractInput1.value);
    const number4 = Number(subtractInput2.value);
    const sResult = number3 - number4;

    subtractResult.textContent = sResult;
});

