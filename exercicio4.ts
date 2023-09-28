//Testando métodos para array:

const arrayNumeros: Array<number> = new Array(10, 20, 10, 30, 20, 50, 50, 40)
const arrayNumeros1: Array<number> = new Array(80, 90)
const arrayString: Array<string> = new Array("gato", "cachorro", "papagaio", "gato", "cachorro")

//push() adiciona no final
console.log(arrayNumeros.push(50)); //retorna o tamanho do array

//pop() remove e retorna o elemento no final
console.log(arrayNumeros.pop());

//shift() remove e retorna o element no inicio
console.log(arrayString.shift());

//unshift() adiciona no inicio e retorna apenas o tamanho do array
console.log(arrayString.unshift("cachorro"));

//concat() => retorna o array concatenado
console.log(arrayNumeros.concat(arrayNumeros1));

//join() => converte em uma string separada por um delimitador
const arraySeparado = arrayString.join("-")
console.log(arraySeparado);

//slice() => retorna uma parte do array deixando o último elemento fora
console.log(arrayString.slice(0, 2));

//splice() => retorna um array com os elementos removidas 
console.log(arrayString.splice(0, 1, "gato")) //(a partir do índice 0, remova 1 elemento, e adicione "gato")

//indexOf() => retorna o indice da primeira ocorrencia do elemento
console.log(arrayString.indexOf("gato"))

//lastIndexOf() => retorna o indice da última ocorrencia do elemento do array
console.log(arrayString.lastIndexOf("gato"))