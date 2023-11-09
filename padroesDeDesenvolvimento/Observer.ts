interface Observer {
  update(data: any): void;
}

class Editor {
  protected content: string[];
  protected events: Observer;

  constructor() {
    this.content = [];
    this.events = new TextObserver();
  }

  getContent(): string {
    return this.content.join("\n");
  }
}

class TextEditor extends Editor {
  insertLine(lineNumber: number, text: string): void {
    this.content.splice(lineNumber - 1, 0, text);
    this.events.update("insert");
  }

  removeLine(lineNumber: number): void {
    this.content.splice(lineNumber - 1, 1);
    this.events.update("remove");
  }

  open(): void {
    this.events.update("open");
  }

  save(): void {
    this.events.update("save");
  }
}

class TextObserver implements Observer {
  update(data: any): void {
    console.log(`Evento Recebido: ${data}`);
  }
}

const textEditor: TextEditor = new TextEditor();

textEditor.open();

const linesOfText: string[] = [
  "Primeira linha de texto",
  "Segunda linha de texto",
  "Terceira linha de texto",
  "EOF",
];

linesOfText.forEach((line, index) => {
  if (line.toLowerCase() !== "eof") {
    textEditor.insertLine(index + 1, line);
  } else {
    textEditor.save();
  }
});

textEditor.save();
console.log("Conteúdo salvo:");
console.log(textEditor.getContent());
