
import { Injectable } from '@nestjs/common';
import { UsuarioModel } from './usurio.Model';

@Injectable()
export class UsuarioService {
    usuario=[];
    constructor(){
        this.usuario.push(new UsuarioModel(1,"fede","casa"))
        this.usuario.push(new UsuarioModel(2,"gaseosa","es sano"))
        this.usuario.push(new UsuarioModel(3,"edi","aprobame"))
        
    }
getusuario(){
    return this.usuario;
}
  getusuarioid(id:string){
    for(const usuario of this.usuario){
        if(usuario.id==id){
            return usuario;
        }
    }
}

postusuario(usuario:UsuarioModel){
    let user= new UsuarioModel(
        usuario.id,
        usuario.alias,
        usuario.adress
    )
    this.usuario.push(user)
    return user;
}
putusuario(newusuario: UsuarioModel, id: string){
    const editUser=this.usuario.find(usuario=>usuario.id==id)
    if(!editUser)
        return 'no existias ese usuario'
    editUser.alias=newusuario.alias
    editUser.adress=newusuario.adress
    return editUser
}
deleteusuario(id){
   this.usuario= this.usuario.filter(usuario=> usuario.id!=id) 
   return "usuario borrado"
}

}