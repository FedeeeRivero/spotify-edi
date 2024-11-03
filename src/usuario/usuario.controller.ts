
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsuarioModel } from './usurio.Model';
import { UsuarioService } from './usuario.service';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly service: UsuarioService) {}

    @Get()
    getUsuario(){
        return this.service.getusuario();
    }

    @Get(':id')
    getUsuarioById(@Param('id') id ) {
        return this.service.getusuarioid(id);
    }

    @Post()
    postUsuario(@Body()newUsuario: UsuarioModel){
        
        return this.service.postusuario(newUsuario);
    }
    @Put(':id')
    putUsuario(@Body()newUsuario: UsuarioModel, @Param('id')id: string) {
        return this.service.putusuario(newUsuario, id);
    }
    @Delete(':id')
    deleteUsuario(@Param('id')id){
        return this.service.deleteusuario(id);
    }
    
  
}
