export interface Pokemon {
    createdAt?: number;
    updatedAt?: number;
    id?: number;
    nombrePokemon: string;
    precioPokemon: number;
    poderEspecialUno: string;
    poderEspecialDos: string;
    fechaCaptura: string;
    nivel: number;
    fkEntrenador: number;

}