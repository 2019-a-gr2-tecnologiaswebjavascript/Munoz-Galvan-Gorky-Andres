export interface Usuario{
    createdAt?: number,
    updatedAt?: number,
    id?: number,
    nombre: string,
    apellido: string,
    cedula:string,
    username:string,
    sueldo?:number,
    estaCasado?:boolean,
    tipoUsuario?:string,
    correo?:string,
    arregloProductosUsuario?:any[]

}