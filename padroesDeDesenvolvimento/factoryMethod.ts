export interface FactoryComputador {
  getDescricao(): string;
}

export class FactoryPc implements FactoryComputador {
  private ram: string;
  private cpu: string;
  private hd: string;
  private type: string;

  public getRam(): string {
    return this.ram;
  }

  public getCpu(): string {
    return this.cpu;
  }

  public getHd(): string {
    return this.hd;
  }

  public getType(): string {
    return this.type;
  }

  constructor() {
    this.ram = "8 GB";
    this.hd = "512 GB";
    this.cpu = "4,5 GHz";
    this.type = "pc";
  }

  getDescricao(): string {
    return "FactoryPc";
  }

  toString(): string {
    return `Memória RAM: ${this.ram}, HD: ${this.hd}, CPU: ${this.cpu}, Tipo: ${this.type}`;
  }
}

export class FactoryServer implements FactoryComputador {
  private ram: string;
  private cpu: string;
  private hd: string;
  private type: string;

  public getRam(): string {
    return this.ram;
  }

  public getCpu(): string {
    return this.cpu;
  }

  public getHd(): string {
    return this.hd;
  }

  public getType(): string {
    return this.type;
  }

  constructor() {
    this.ram = "8 GB";
    this.hd = "256 GB";
    this.cpu = "2,4 GHz";
    this.type = "server";
  }

  getDescricao(): string {
    return "FactoryServer";
  }

  toString(): string {
    return `Memória RAM: ${this.ram}, HD: ${this.hd}, CPU: ${this.cpu}, Tipo: ${this.type}`;
  }
}

export class Factory {
  static createFactoryComputador(type: string): any {
    if (type === "pc") {
      return new FactoryPc();
    } else if (type === "server") {
      return new FactoryServer();
    }
    return null;
  }
}

function main() {
  const pc = Factory.createFactoryComputador("pc");
  console.log(pc.getDescricao());
  console.log(pc.toString());

  const server = Factory.createFactoryComputador("server");
  console.log(server.getDescricao());
  console.log(server.toString());
}

main();
