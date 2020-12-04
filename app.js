// set variables 

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

//multiple calculator variables
const multipleInput1 = document.getElementById('multiple-input-1');
const multipleInput2 = document.getElementById('multiple-input-2');
const multipleButton = document.getElementById('multiple-button');
const multipleResult = document.getElementById('multiple-result');

//divide calculator variables
const divideInput1 = document.getElementById('divide-input-1');
const divideInput2 = document.getElementById('divide-input-2');
const divideButton = document.getElementById('divide-button');
const divideResult = document.getElementById('divide-result');

// set event listeners

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

// set event listeners, multiple
multipleButton.addEventListener('click', () => {

const number5 = Number(multipleInput1.value);
const number6 = Number(multipleInput2.value);
const mResult = number5 * number6;

multipleResult.textContent = mResult;
});

// set event listeners, divide
divideButton.addEventListener('click', () => {

    const number7 = Number(divideInput1.value);
    const number8 = Number(divideInput2.value);
    const dResult = number7 / number8;
    
    divideResult.textContent = dResult;
    });