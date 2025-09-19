import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.Controller';
// import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [UsuarioController],
  // providers: [AppService],
})
export class AppModule {}
