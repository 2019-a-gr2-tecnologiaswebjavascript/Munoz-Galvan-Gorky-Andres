import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams, ToastController} from "@ionic/angular";
import {PokemonHttpService} from "../servicios/http/pokemon-http.service";
import {Pokemon} from "../dto/pokemon";

@Component({
  selector: 'app-modal-editar-pokemon',
  templateUrl: './modal-editar-pokemon.page.html',
  styleUrls: ['./modal-editar-pokemon.page.scss'],
})
export class ModalEditarPokemonPage implements OnInit {

  formularioCambio = false;
  pokemon = {} as Pokemon;
  constructor(private readonly _navParams: NavParams,
              public toastController: ToastController,
              private readonly _modalController: ModalController,
              private readonly _PokemonHttpService:PokemonHttpService) {

    this.pokemon = this._navParams.get('entrenador');
  }

  async presentToast(mensaje) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 1000
    });
    toast.present();
  }

  cambio() {
    this.formularioCambio = true;
  }

  async actualizarPokemon() {
    const $actualizarPokemon = await this._PokemonHttpService.actualizar(this.pokemon, this.pokemon.id);
    $actualizarPokemon.subscribe((value) => {
          this.presentToast('Se actualizó el pokemon');
          this.dismiss();
        },
        (e) => {
          console.log('error ', e)
          this.presentToast('No actualizó el pokemon');
        });
  }

  dismiss() {
    this._modalController.dismiss();
  }

  ngOnInit() {
  }

}
