const totalAmount = document.getElementById('amount');
let serviceLevel = document.getElementsByClassName('input__check');
let numberOfPerson = document.getElementById('person');
let btn = document.getElementById('calculate');
let totalTip = document.getElementById('totalTip');


let mount = ""
/* totalAmount.addEventListener("input", () => {
    mount = parseFloat(totalAmount.value)
}); */


btn.addEventListener('click', () => {
    Array.from(serviceLevel).find(input = radio.checked)

    if(Array.from(serviceLevel).find(input != radio.checked)) {
        alert("Please checked level service!")
    }
})



let persons = () => {
    for(i = 0; i < numberOfPerson.length; i++) {
        if(numberOfPerson.children[i].selected) {
            return i
        }
    }
}

let currentServiceLevel = () => {
    for(let i = 0; i<serviceLevels.length; i++){
        if(serviceLevels[i].checked){
            return serviceLevels[i].value
        }
    }
}

