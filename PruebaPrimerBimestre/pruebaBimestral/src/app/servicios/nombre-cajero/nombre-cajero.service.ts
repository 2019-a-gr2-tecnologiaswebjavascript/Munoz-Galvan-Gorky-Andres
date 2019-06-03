import { Injectable } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { Entrenador } from 'src/app/interfaces/entrenador';

@Injectable({
  providedIn: 'root'
})
export class NombreCajeroService {

  nombreCajero:string="";

  bddPokemones:Array<any>;
  bddEntrenadores:Array<any>;
  idPokemon = 1;
  idEntrenador = 1;

  constructor() { 
    this.bddEntrenadores = new Array<any>();
    this.bddPokemones = new Array<any>();
  }
}
