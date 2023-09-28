//testar métodos para inteiros:

const numeroDecimal: number = 5.45032929
const numeroInteiro: number = 15
const numeroInteiro2: number = 40
const numeroString: string = "10"
const numeroNegativo: number = -5

//toFixed():
console.log(numeroDecimal.toFixed(2));
console.log(numeroDecimal.toFixed(3));

//toPrecision():
console.log(numeroDecimal.toPrecision(3));

//toString():
console.log(typeof(numeroInteiro));
console.log(typeof(numeroInteiro.toString()));

//parseInt():
console.log(typeof(numeroString));
console.log(typeof(parseInt(numeroString)));

//parseFloat():
console.log(typeof(numeroString));
console.log(typeof(parseFloat(numeroString)));
console.log((parseFloat(numeroString)))

//isNaN():
console.log(isNaN(numeroInteiro));
//console.log(isNaN(numeroString));

//isFinite():
console.log(isFinite(numeroDecimal));

//toExponential():
console.log(numeroInteiro.toExponential())

//Math.abs():
console.log(Math.abs(numeroNegativo));

//Math.round():
console.log(Math.round(numeroDecimal)); //inteiro mais proximo

//Math.floor():
console.log((Math.floor(numeroDecimal))); //arredonda para baixo

//Math.ceil():
console.log(Math.ceil(numeroDecimal)); //arredonda para cima 

//Math.max():
console.log((Math.max(numeroInteiro, numeroInteiro2)));

//Math.min():
console.log((Math.min(numeroInteiro, numeroInteiro2)));