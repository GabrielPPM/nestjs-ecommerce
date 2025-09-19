export class UsuarioReposotory {
  private usuarios = [];

  salvar(usuario) {
    this.usuarios.push(usuario);
    console.log(usuario);
  }

  pegarUsuario() {
    return this.usuarios;
  }
}
