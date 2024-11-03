import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioController } from './usuario/usuario.controller';
import { UsuarioService } from './usuario/usuario.service';
import { CancionController } from './cancion/cancion.controller';
import { CancionService } from './cancion/cancion.service';

@Module({
  imports: [],
  controllers: [AppController, UsuarioController, CancionController],
  providers: [AppService, UsuarioService, CancionService],
})
export class AppModule {}
