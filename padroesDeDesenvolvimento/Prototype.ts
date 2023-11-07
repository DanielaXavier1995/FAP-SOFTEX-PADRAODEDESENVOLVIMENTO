abstract class Veiculo {
  constructor(
    public modelo: string,
    public marca: string,
    public cor: string
  ) {}

  clone(): any {}
  represent(): void {}
}

class Carro extends Veiculo {
  constructor(
    public modelo: string,
    public marca: string,
    public cor: string,
    public numeroRodas: number,
    public numeroPortas: number
  ) {
    super(modelo, marca, cor);
  }

  clone() {
    return new Carro(
      this.modelo,
      this.marca,
      this.cor,
      this.numeroRodas,
      this.numeroPortas
    );
  }

  represent(): void {
    console.log(
      `------ CARRO ------` +
        `\nModelo: ${this.modelo}` +
        `\nMarca: ${this.marca}` +
        `\nCor: ${this.cor}` +
        `\nNumero de Rodas: ${this.numeroRodas}` +
        `\nNumero de Portas: ${this.numeroPortas}`
    );
  }
}

class Moto extends Veiculo {
  constructor(
    public modelo: string,
    public marca: string,
    public cor: string,
    public numeroRodas: number
  ) {
    super(modelo, marca, cor);
  }

  clone() {
    return new Moto(this.modelo, this.marca, this.cor, this.numeroRodas);
  }

  represent(): void {
    console.log(
      `------ MOTO ------` +
        `\nModelo: ${this.modelo}` +
        `\nMarca: ${this.marca}` +
        `\nCor: ${this.cor}` +
        `\nNumero de Rodas: ${this.numeroRodas}`
    );
  }
}

class Aplicacao {
  veiculos: Veiculo[];

  constructor() {
    this.veiculos = [
      new Carro("Sedan", "Toyota", "Azul", 4, 4),
      new Moto("Esportiva", "Honda", "Vermelha", 2),
      new Carro("Hatch", "Volkswagen", "Branco", 4, 2),
      new Moto("Custom", "Harley-Davidson", "Preto", 2),
      new Carro("SUV", "Ford", "Prata", 4, 4),
      new Moto("Naked", "Yamaha", "Azul", 2),
    ];
  }

  cloneVeiculos(): Veiculo[] {
    const arrayVeiculos: Veiculo[] = [];
    for (const veiculo of this.veiculos) {
      arrayVeiculos.push(veiculo.clone());
    }
    return arrayVeiculos;
  }

  representVeiculos(): void {
    const cloneVeiculos = this.cloneVeiculos();
    for (const veiculo of cloneVeiculos) {
      veiculo.represent();
    }
  }
}

const app = new Aplicacao();
app.cloneVeiculos();
app.representVeiculos();
