const counter = document.getElementById('counter');
const numberMinus = document.getElementById('minus');
const numberPlus = document.getElementById('plus');

let count = 0
counter.textContent = count

numberPlus.addEventListener('click', ()=> {
    counter.textContent = ++count
});

numberMinus.addEventListener('click', () => {
    if(count > 0){
        counter.innerHTML = --count
    }
});