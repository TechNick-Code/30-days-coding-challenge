const countOutput = document.getElementById('countOutput');
const increament = document.getElementById('increament');
const reset = document.getElementById('reset');
const decreament = document.getElementById('decreament')
let count = 0;

increament.onclick = function(){
    countOutput.textContent = ++count;
}

reset.onclick = function(){
    count = 0;
    countOutput.textContent = count;
}

decreament.onclick = function(){
    countOutput.textContent = --count;
}