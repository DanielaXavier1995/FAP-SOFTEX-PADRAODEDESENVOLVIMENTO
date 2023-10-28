export interface Tecido {
    tipoTecido(): void;
}

export class CategoriaRoupa {
    constructor(public categoria: string) {}
}

export class Roupa {
    private tecido: Tecido;
    private categoria: CategoriaRoupa[];

    constructor(tecido: Tecido) {
       this.tecido = tecido;
       this.categoria = [
        new CategoriaRoupa("camisa"),
        new CategoriaRoupa("bermuda")
    ];
    }

    tipoTecido() {
        this.tecido.tipoTecido();
    }

    listarCategorias() {
      for (const c of this.categoria) {
         console.log(`Categoria: ${c.categoria}`)
      }
    }
}

export class TecidoAlgodao implements Tecido {
    tipoTecido(): void {
        console.log(`É algodão!`)
    }
}

export class TecidoJeans implements Tecido {
    tipoTecido(): void {
        console.log(`É Jeans!`)
    }
}

function main() {
    const roupa1 = new Roupa(new TecidoAlgodao());
    const roupa2 = new Roupa(new TecidoJeans());

    roupa1.listarCategorias();
    roupa1.tipoTecido();
    roupa2.listarCategorias();
    roupa2.tipoTecido();
}

main();

