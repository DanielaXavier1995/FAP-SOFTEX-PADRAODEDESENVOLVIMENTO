class SistemaDeSeguranca {
    private static instancia: SistemaDeSeguranca | null = null;

    private constructor() {
        console.log("Sistema de segurança inicializado.");
    }

    public static obterInstancia(): SistemaDeSeguranca {
        if (!SistemaDeSeguranca.instancia) {
            SistemaDeSeguranca.instancia = new SistemaDeSeguranca();
        }

        return SistemaDeSeguranca.instancia;
    }

    public ativar(): void {
        console.log("Sistema de segurança ativado.");
    }

    public desativar(): void {
        console.log("Sistema de segurança desativado.");
    }
}

const sistemaDeSeguranca1 = SistemaDeSeguranca.obterInstancia();
sistemaDeSeguranca1.ativar();

const sistemaDeSeguranca2 = SistemaDeSeguranca.obterInstancia();
sistemaDeSeguranca2.desativar();

console.log(sistemaDeSeguranca1 === sistemaDeSeguranca2); 
