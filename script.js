let count = 0;
const counterDisplay = document.getElementById('counter');
const happyBtn = document.getElementById('btn-happy');
const resetBtn = document.getElementById('btn-reset');

happyBtn.addEventListener('click', () => {
    count++;
    counterDisplay.innerText = count;
});

resetBtn.addEventListener('click', () => {
    count = 0;
    counterDisplay.innerText = count;
});