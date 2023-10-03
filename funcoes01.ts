//FUNÇÕES SEM PARAMETRO E SEM RETORNO

function fun01(): void {
    console.log("Esta é a minha primeira funcao Typescript");
}
fun01()

//FUNÇOES COM PARAMETRO E SEM RETORNO

function fun02(nome: string): void {
    console.log("Boa tarde " + nome);
}
fun02("Dani")


//FUNÇOES SEM PARAMETRO E COM RETORNO

function fun03(): number {
    return 10;
}
let valor = fun03();
console.log(valor);

//FUNÇOES COM PARAMETRO E COM RETORNO

function fun04(num1: number, num2: number): number {
    return num1 + num2
}
console.log(fun04(10,10));