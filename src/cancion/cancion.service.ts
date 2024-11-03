import { Injectable } from '@nestjs/common';
import { CancionesModel } from './cancion.Model';

@Injectable()
export class CancionService {

Canciones=[];
constructor(){
    this.Canciones.push(new CancionesModel(1,"lose yourself","eminem"))
    this.Canciones.push(new CancionesModel(2,"como vos lo haces","emanero"))
    this.Canciones.push(new CancionesModel(3,"rubia","sumo"))
    
}
getCanciones(){
    return this.Canciones;
}
  getCancionesid(id:string){
    for(const Canciones of this.Canciones){
        if(Canciones.id==id){
            return Canciones;
        }
    }
}

getCancionesname(name:string){
    for(const Canciones of this.Canciones){
        if(Canciones.name==name){
            return Canciones;
        }
    }
}

getCancionesartist(artist:string){
    for(const Canciones of this.Canciones){
        if(Canciones.artist==artist){
            return Canciones;
        }
    }
}

postCanciones(Canciones:CancionesModel){
    let user= new CancionesModel(
        Canciones.id,
        Canciones.name,
        Canciones.artist
    )
    this.Canciones.push(user)
    return user;
}
putCanciones(newCanciones: CancionesModel, id: string){
    const editUser=this.Canciones.find(Canciones=>Canciones.id==id)
    if(!editUser)
        return 'no existias esta cancion'
    editUser.name=newCanciones.name
    editUser.artist=newCanciones.artist
    return editUser
}
deleteCanciones(id){
   this.Canciones= this.Canciones.filter(Canciones=> Canciones.id!=id) 
   return "canciones borrado"
}


}
