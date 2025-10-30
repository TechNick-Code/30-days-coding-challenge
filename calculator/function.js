const inputDisplay = document.getElementById('inputDisplay');
const answer = document.getElementById('answer');
const grayButtons = document.querySelectorAll('.gray');


function appendToDisplay(input) {
    inputDisplay.value += input;
}

function cancel() {
    inputDisplay.value = '';
    answer.textContent = '';
}

function del() {
    inputDisplay.value = inputDisplay.value.slice(0, -1);
}

function calculate() {
    try {
        const result = eval(inputDisplay.value);
        answer.textContent = result;
    } catch (error) {
        answer.textContent = 'Error';
    }
}