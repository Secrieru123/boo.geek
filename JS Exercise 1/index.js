const kelvin = 293 // I choosed const variable because this variable is not going to change it’s value

let celsius = kelvin - 273 // I wrote the different between kelvin - 273
    
console.log('The temperature is ' + kelvin + ' degrees kelvin');
console.log('The temperature is ' + kelvin + ' - 273 = ' + celsius + ' degrees celsius');

let fahrenheit = celsius * (9/5) + 32 //  I wrote the formula of converting from fahrenheit to Celsius in order to set the fahrenheit variable in it’s value

console.log('The temperature is ' + celsius + ' * (9/5) + 32 = ' + fahrenheit + ' degrees fahrenheit');
console.log(Math.floor(fahrenheit)); // I wrote the result of fahrenheit with method from the built=in Math used .floor()

console.log(`The temperature is ${fahrenheit} degrees fahrenheit`)
