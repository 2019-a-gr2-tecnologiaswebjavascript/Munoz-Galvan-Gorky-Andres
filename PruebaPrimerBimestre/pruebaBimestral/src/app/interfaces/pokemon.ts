export interface Pokemon{
    id?:number,
    numeroPokemon:number,
    nombrePokemon:string,
    poderEspecialUno: string,
    poderEspecialDos: string,
    fechaCaptura: Date,
    nivel:number,
    entrenadorId:number,
    cantidad?:number
}