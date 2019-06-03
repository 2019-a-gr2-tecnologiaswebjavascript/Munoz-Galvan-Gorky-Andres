import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { ActivatedRoute } from '@angular/router';
import { NombreCajeroService } from 'src/app/servicios/nombre-cajero/nombre-cajero.service';
import { NumberValueAccessor } from '@angular/forms/src/directives';

@Component({
  selector: 'app-gestion-pokemon',
  templateUrl: './gestion-pokemon.component.html',
  styleUrls: ['./gestion-pokemon.component.css']
})
export class GestionPokemonComponent implements OnInit {

  nuevoPokemon:Pokemon={} as any;
  pokemones:Pokemon[]=[];
  nombrePokemonBuscar:string="";
  entrenadorId:any;


  constructor(private readonly _activatedRoute:ActivatedRoute,private readonly _nombreCajeroService:NombreCajeroService) { 
    this.entrenadorId=Number(this._activatedRoute.snapshot.params.entrenadorId);
    console.log(this._nombreCajeroService.nombreCajero);
    this.cargarPokemonesEntrenadorID()
  }

  ngOnInit() {
  }

  
  guardarNuevoPokemon(){
    this.nuevoPokemon.entrenadorId = Number(this.entrenadorId);
    this.nuevoPokemon.id = this._nombreCajeroService.idPokemon;
    this._nombreCajeroService.bddPokemones.push(this.nuevoPokemon);
    this._nombreCajeroService.idPokemon++;
    console.log(this._nombreCajeroService.bddPokemones);
  }

  eliminarPokemon(index:number){
    this._nombreCajeroService.bddPokemones.splice(index,1);
    console.log(this.pokemones);
  }

  buscarPokemonPorNombre():Pokemon[]{
    console.log(this.nombrePokemonBuscar);
    return this.pokemones.filter(
      (pokemon)=>{return pokemon.nombrePokemon.toUpperCase().includes(this.nombrePokemonBuscar.toUpperCase())
      });
  }

  cargarPokemonesEntrenadorID(){
    this.pokemones = this._nombreCajeroService.bddPokemones.filter((pokemon)=>{pokemon.entrenadorId===this.entrenadorId});
  }

}
