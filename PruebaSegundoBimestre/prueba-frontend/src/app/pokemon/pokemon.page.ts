import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage implements OnInit {

  pokemones: any = [];

  constructor() { }

  editarPokemon(pokemon){

  }

  eliminarPokemon(id){

}

  ngOnInit() {
  }

}
