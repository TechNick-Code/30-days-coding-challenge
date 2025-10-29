const inputDisplay = document.getElementById('input');
const answer = document.getElementById('answer');

function appendToDisplay(input) {
    inputDisplay.value += input;
    console.log(inputDisplay.value);
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