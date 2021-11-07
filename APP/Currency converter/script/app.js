


let ActionOne = (e) => {
    let c_in = e.target.value
    let c_out = outputList.firstElementChild.value
    let amount = parseFloat(inputMoney.firstElementChild.value)

    let result = convert(c_in,c_out,amount, data.rates)
    display(displayDiv,result)
}

let ActionTwo = (e) => {
    let c_in = inputList.firstElementChild.value
    let c_out = e.target.value
    let amount = parseFloat(inputMoney.firstElementChild.value)

    let result = convert(c_in,c_out,amount, data.rates)
    display(displayDiv,result)
}

let ActionThree = (e) => {
    let c_in = inputList.firstElementChild.value
    let c_out = outputList.firstElementChild.value
    let amount = parseFloat(e.target.value)

    let result = convert(c_in,c_out,amount, data.rates)
    display(displayDiv,result)
}

let convert = (c_in, c_out, amount, rates) => {
    let k_c_in = data.rates[c_in]
    let k_c_out = data.rates[c_out]

    let k_c = k_c_in / k_c_out
    let result = amount / k_c
    return result
}


const activeCurrencies = ['EUR','USD', 'MDL','RON'];


inputAmount(inputMoney, 'enter amount...', 'ActionThree');
selectList(inputList, data.rates, 'ActionOne');
selectList(outputList, data.rates, 'ActionTwo');