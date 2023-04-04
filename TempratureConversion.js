let tempInCelcius = 50;
let tempInFerenheit = 60;

let degF = tempInCelcius * (9 / 5) + 32;
let degC = (tempInFerenheit - 32) * (5 / 9);
console.log(`Temp ${tempInCelcius} in ferenheit ` + degF);
console.log(`Temp ${tempInFerenheit} in celcius ` + degC);