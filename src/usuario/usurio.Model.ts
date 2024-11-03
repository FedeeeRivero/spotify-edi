export class UsuarioModel{
    id: number
    alias:string
    adress:string

    constructor(id:number,alias:string,adress:string){
        this.id=id
        this.alias=alias
        this.adress=adress
    }
}
