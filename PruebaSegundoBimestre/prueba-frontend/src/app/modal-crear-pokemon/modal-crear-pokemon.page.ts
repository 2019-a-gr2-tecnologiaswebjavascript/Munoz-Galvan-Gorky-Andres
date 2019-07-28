import { Component, OnInit } from '@angular/core';
import {Pokemon} from "../dto/pokemon";
import {ModalController, NavParams} from "@ionic/angular";

@Component({
  selector: 'app-modal-crear-pokemon',
  templateUrl: './modal-crear-pokemon.page.html',
  styleUrls: ['./modal-crear-pokemon.page.scss'],
})
export class ModalCrearPokemonPage implements OnInit {

  nuevoPokemon = {} as Pokemon;
  constructor(private readonly _modalController: ModalController, private readonly _navParams: NavParams,) { }

  guardarPokemon(){
  }

  dismiss(){
    this._modalController.dismiss();
  }
  cambioFecha() {
    const fecha = this.nuevoPokemon.fechaCaptura;
    this.nuevoPokemon.fechaCaptura = fecha.substr(0, 10);
  }

  ngOnInit() {
    this.nuevoPokemon.fkEntrenador = Number(this._navParams.get('idEntrenador'));
    console.log(this.nuevoPokemon.fkEntrenador);
    //this.nuevoPokemon.fkEntrenador = 

  }

}
