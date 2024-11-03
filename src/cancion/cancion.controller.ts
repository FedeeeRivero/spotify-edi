import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

import { CancionService } from './cancion.service';
import { CancionesModel } from './cancion.Model';

@Controller('cancion')
export class CancionController {
    
      constructor(private readonly service: CancionService) {}
    
        @Get()
        getCanciones(@Query('name')name:string,@Query('artist')artist:string){
            if(artist)
                return this.service.getCancionesartist(artist)
            else if(name)
                return this.service.getCancionesname(name)
            return this.service.getCanciones();
        }
    
        @Get(':id')
        getCancionesById(@Param('id') id ) {
            return this.service.getCancionesid(id);

        }
        
    
        @Post()
        postCanciones(@Body()newCanciones: CancionesModel){
            
            return this.service.postCanciones(newCanciones);
        }
        @Put(':id')
        putCanciones(@Body()newCanciones: CancionesModel, @Param('id')id: string) {
            return this.service.putCanciones(newCanciones, id);
        }
        @Delete(':id')
        deleteCanciones(@Param('id')id){
            return this.service.deleteCanciones(id);
        }
        
      
    
    }
