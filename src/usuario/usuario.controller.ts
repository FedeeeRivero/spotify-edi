import { Controller, Param } from '@nestjs/common';
import { get } from 'http';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly service: UsuarioController) {

    @get()
    getUsuario(){
        return this.service.getUsuario();
    }

    @get(':id')
    getUsuarioByName(@Param('id') name: String) {
        return this.service.getUsuarioName(name);
    }

    @post()
    postUsuario(@Body()newUsuario: UsuarioMode1){
        return this.service.postUsuario(newUsuario);
    }
    @Put(':id')
    putUsuario(@Body()newUsuario: UsuariMode1, @Param('id')id: string): String {
        return this.service.putUsuario(newUsuario, id);
    }
    @Delete()
    deleteUsuario(): string {
        return this.service.deleteUsuario();
    }
    
  }
}
