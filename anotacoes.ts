console.log("hello world!")

let nome: string = "Dani";

function soma(n1: number, n2: number): number {
    return n1 + n2
}

function soma1(n1: number, n2: number): number {
    return n1 + n2
}

const soma2 = (n1:number, n2: number): number => {
    return n1 + n2
}

let texto: string | number //aceita string e number
let texto1: any //aceita qualquer tipo

let numero1: number = 10
let valorNulo1: null 
let texto2: string = "Ola, mundo"
let boleano1: boolean = true
let arr1: Array<String> = ["ana", "jose", "maria"]
let obj1: Object = {"ana": 12, "jose": 50, "maria": 35}

console.log(texto);