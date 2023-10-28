import process from "process"
/* Crie uma função chamada saudacao que exiba a mensagem "Olá, mundo!" no
console quando for chamada. */

function saudacao(): void {
    console.log("Olá, Mundo!");
}
saudacao()

//funcao anonima:
const saudacao01 = ():void => {
    console.log("Olá, Mundo!!");
    
}

/**
 * Escreva uma função chamada dobro que aceite um parâmetro num e exiba o dobro
   desse número no console.
 */

function dobro(num: number):void {
   const dobro = 2*num
   console.log(dobro);
}
dobro(10)

const dobro01 = (num: number): void => {
    const dobro = 2*num
    console.log(dobro);
}
dobro01(20)

/**
Crie uma função chamada mostrarNumeros que receba dois parâmetros, inicio e
fim. Essa função deve exibir todos os números inteiros no intervalo de inicio a fim
(inclusive) no console.
 */

function mostrarNumeros(inicio: number, fim: number): void {
    for(let i = inicio; i <= fim; i++) {
        process.stdout.write(i + " ") //comando para rodar o intervalo em uma linha necessario 
        //instalar e importar o process e instalar o types/node
    }
}

mostrarNumeros(1, 20)

/*
Escreva uma função chamada verificarPar que aceite um número como entrada e
exiba no console se o número é par ou não.
*/ 

function verificarPar(num: number):void {
    num % 2 === 0 ? console.log("Número par"):console.log("Número ímpar");
}

verificarPar(11)

/**
Crie uma função chamada imprimirLista que aceite um array como parâmetro e
exiba cada elemento desse array no console, um por um.
 */

function imprimirLista(numerosList: Array<number>): void {
    const retorno = numerosList.forEach(n => {console.log(n)})
}

imprimirLista(new Array(10, 20, 30, 40, 50, 60, 70))