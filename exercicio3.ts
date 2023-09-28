//Testando métodos de String:

const strComEspaco: string = " teste"
const str: string = "JavaScript"
const numero: number = 10000

//trim()
console.log(strComEspaco.trim()); //removendo espaços

//charAt()
console.log(str.charAt(0)); //primeiro caractere
console.log(str.charAt(str.length - 1)); //ultimo caractere

//concat()
console.log(strComEspaco.trim().concat(str));

//indexOf()
console.log(str.indexOf("a")); //posiçao da primeira ocorrencia da letra ou substring
console.log(str.indexOf('Script'));



//lastIndexOf()
console.log(str.lastIndexOf("a")); //posiçao da ultima ocorrencia da letra ou substring

//slice()
console.log(str.slice(0,4)) //Java

//toString()
console.log(typeof(numero));
console.log(typeof(numero.toString()));

//substring():
console.log(str.substring(0,4)); //Java

//toUpperCase() e toLowerCase();
console.log(str.toUpperCase());
console.log(str.toLowerCase());

//replace()
console.log(str.replace("Java", "J")); //JScript
