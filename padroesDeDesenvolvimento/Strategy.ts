interface Strategy {
  execute(n1, n2): number;
}

class Soma implements Strategy {
  execute(n1, n2): number {
    return n1 + n2;
  }
}

class Subtracao implements Strategy {
  execute(n1, n2): number {
    return n1 - n2;
  }
}

class Multiplicacao implements Strategy {
  execute(n1, n2): number {
    return n1 * n2;
  }
}

const readline = require("readline-sync");

let n1 = readline.questionInt("Digite o primeiro numero: ");
let n2 = readline.questionInt("Digite o segundo numero: ");
let op = readline.question("Digite a operacao desejada: ");

switch (parseInt(op)) {
  case 1:
    const soma = new Soma();
    console.log(soma.execute(n1, n2));
    break;
  case 2:
    const subtracao = new Subtracao();
    console.log(subtracao.execute(n1, n2));
    break;
  case 3:
    const multiplicacao = new Multiplicacao();
    console.log(multiplicacao.execute(n1, n2));
    break;
  default:
    console.log("Operação inválida!!");
    break;
}
