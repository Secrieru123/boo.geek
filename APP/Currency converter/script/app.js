
//HW3. on <event> = 'Action(event)' ----> event Object (.target) -> .value sa citim valoarea 

let ActionOne = () => {
    alert('One')
}

let ActionTwo = () => {
    alert('Two')
}

let ActionThree = () => {
    alert('Three')
}

const activeCurrencies = ['EUR','USD', 'MDL','RON'];
//HW1. data.rates -----> filter ----> selectList

inputAmount(inputMoney, 'enter amount...', 'ActionThree');
selectList(inputList, data.rates, 'ActionOne');
selectList(outputList, data.rates, 'ActionTwo');