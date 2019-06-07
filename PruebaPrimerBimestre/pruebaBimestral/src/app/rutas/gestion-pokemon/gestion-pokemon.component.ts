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
    this.cargarPokemonesEntrenadorID()
  }

  ngOnInit() {
  }

  
  guardarNuevoPokemon(){
    this.nuevoPokemon.entrenadorId = Number(this.entrenadorId);
    this.nuevoPokemon.id = this._nombreCajeroService.idPokemon;
    this._nombreCajeroService.bddPokemones.push(this.nuevoPokemon);
    this._nombreCajeroService.idPokemon++;
    this.nuevoPokemon={} as any;
    this.cargarPokemonesEntrenadorID();
    //console.log(this._nombreCajeroService.bddPokemones);
  }

  eliminarPokemon(id:number){
    let pokemonEliminar = this._nombreCajeroService.bddPokemones.findIndex((pokemon)=>{return pokemon.id==id})
    console.log(pokemonEliminar)
    this._nombreCajeroService.bddPokemones.splice(pokemonEliminar,1);
    this.cargarPokemonesEntrenadorID();
    console.log(this.pokemones);
  }

  buscarPokemonPorNombre(){
    this.pokemones = this._nombreCajeroService.bddPokemones.filter((pokemon)=>{
      return (
        pokemon.entrenadorId==this.entrenadorId && 
        pokemon.nombrePokemon.toUpperCase().includes(this.nombrePokemonBuscar.toUpperCase())
          )
    });
  }

  cargarPokemonesEntrenadorID(){
    this.pokemones = this._nombreCajeroService.bddPokemones.filter((pokemon)=>{return pokemon.entrenadorId==this.entrenadorId});
    console.log(this.pokemones);
  }

}
