import { Component, OnInit } from '@angular/core';
import {Pokemon} from "../dto/pokemon";
import {ModalController, NavParams, ToastController} from "@ionic/angular";
import {PokemonHttpService} from "../servicios/http/pokemon-http.service";

@Component({
  selector: 'app-modal-crear-pokemon',
  templateUrl: './modal-crear-pokemon.page.html',
  styleUrls: ['./modal-crear-pokemon.page.scss'],
})
export class ModalCrearPokemonPage implements OnInit {

  nuevoPokemon = {} as Pokemon;

  constructor(private readonly _modalController: ModalController,
              private readonly _navParams: NavParams,
              private readonly _toastController: ToastController,
              private readonly _PokemonHttpService:PokemonHttpService) {

    this.nuevoPokemon.fkEntrenador = Number(this._navParams.get('idEntrenador'));
  }

  async presentToast(mensaje) {
    const toast = await this._toastController.create({
      message: mensaje,
      duration: 1000
    });
    toast.present();
  }
  guardarPokemon(){
    const $nuevoPokemon = this._PokemonHttpService.crear(this.nuevoPokemon);
    $nuevoPokemon.subscribe((value) => {
      this.presentToast('Se creó el pokemon');
      this.dismiss();
    }, (error) => {
      this.presentToast('Existió un problema al crear el pokemon');
    });
  }

  dismiss(){
    this._modalController.dismiss();
  }
  cambioFecha() {
    const fecha = this.nuevoPokemon.fechaCaptura;
    this.nuevoPokemon.fechaCaptura = fecha.substr(0, 10);
  }

  ngOnInit() {
  }

}
