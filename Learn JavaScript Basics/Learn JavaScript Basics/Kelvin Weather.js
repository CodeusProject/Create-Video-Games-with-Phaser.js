/*This is today's temperature 
They asked me to put const, but since this is today's temperature, not every days' temperature will be the same.
The instructions for variables celsius & fahrenheit were not clear, so I put var*/
//celsius is obviously today's temperature in Celsius instead of Kelvin :D
var kelvin = 293;
var celsius = kelvin - 273;
//Below is the temperature in Fahrenheit
var fahrenheit = celsius * (9/5) + 32;
//Rounding bc we often get decimals for Celsius to Fahrenheit conversion.
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)

//Task 11
kelvin = 0;
celsius = kelvin - 273;
fahrenheit = celsius * (9/5) + 32;
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)

//Task 12
kelvin = 0;
celsius = kelvin - 273;
newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`)
