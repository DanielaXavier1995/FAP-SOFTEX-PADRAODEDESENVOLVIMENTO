interface Sanduiche {
  getPreco(): number;
  getDescricao(): string;
}

class FrangoAssado implements Sanduiche {
  getPreco(): number {
    return 4.5;
  }
  getDescricao(): string {
    return "Sanduiche de Frango Assado";
  }
}

class Pepperoni implements Sanduiche {
  private sanduiche: FrangoAssado;

  constructor(sanduiche: FrangoAssado) {
    this.sanduiche = sanduiche;
  }
  getPreco(): number {
    return this.sanduiche.getPreco() + 0.99;
  }
  getDescricao(): string {
    return this.sanduiche.getDescricao() + ", Pepperonni";
  }
}

class Queijo implements Sanduiche {
  private sanduiche: Sanduiche;

  constructor(sanduiche: Sanduiche) {
    this.sanduiche = sanduiche;
  }
  getPreco(): number {
    return this.sanduiche.getPreco() + 2.0;
  }
  getDescricao(): string {
    return this.sanduiche.getDescricao() + ", Queijo Mussarela Ralado";
  }
}

let sanduiche = new FrangoAssado();
sanduiche = new Pepperoni(sanduiche);
sanduiche = new Queijo(sanduiche);

console.log(`${sanduiche.getDescricao()} custa ${sanduiche.getPreco()}`);
