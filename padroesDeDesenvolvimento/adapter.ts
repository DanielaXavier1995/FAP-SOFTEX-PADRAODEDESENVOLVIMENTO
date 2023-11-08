interface PatoInterface {
  somPato(): void;
}

class Pato implements PatoInterface {
  somPato(): void {
    console.log("QUACK!!");
  }
}

interface GalinhaInterface {
  somGalinha(): void;
}

class Galinha implements GalinhaInterface {
  somGalinha(): void {
    console.log("COCORICÓ!!");
  }
}

class AdaptadorPato implements Galinha {
  private pato: Pato;

  constructor(pato: Pato) {
    this.pato = pato;
  }
  somGalinha(): void {
    this.pato.somPato();
  }
}

class AdaptadorPatoDemo {
  static demonstrar(): void {
    const pato = new Pato();
    const adaptador = new AdaptadorPato(pato);

    console.log("Esse é o pato que age como uma galinha:");
    adaptador.somGalinha();
  }
}

AdaptadorPatoDemo.demonstrar();
