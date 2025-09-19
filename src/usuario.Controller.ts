import { Body, Controller, Post } from '@nestjs/common';
import { UsuarioReposotory } from './usuario.repository';

@Controller('/usuarios')
export class UsuarioController {
  private usuarioRepository = new UsuarioReposotory();

  @Post()
  criaUsuario(@Body() dadosDoUsuario: any) {
    this.usuarioRepository.salvar(dadosDoUsuario);
    return dadosDoUsuario;
  }
}
