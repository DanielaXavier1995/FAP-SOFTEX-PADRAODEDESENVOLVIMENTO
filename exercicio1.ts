enum TipoDeUsuario {
    Professor,
    Aluno,
    Convidado
}

const verificarPermissao = (usuario: TipoDeUsuario): void => {
   switch(usuario) {
     case TipoDeUsuario.Professor:
        console.log("Seja bem vindo Professor!");
     break;
     case TipoDeUsuario.Aluno:
        console.log("Seja bem vindo Aluno!");
     break;
     case TipoDeUsuario.Convidado:
        console.log("Voce e um convidado e nao tem acesso ao Sistema!");
     break;
   }
}

verificarPermissao(TipoDeUsuario.Convidado)