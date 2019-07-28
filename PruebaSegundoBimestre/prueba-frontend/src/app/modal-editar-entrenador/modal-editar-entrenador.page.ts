import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController, ToastController } from '@ionic/angular';
import { Entrenador } from '../dto/entrenador';

@Component({
  selector: 'app-modal-editar-entrenador',
  templateUrl: './modal-editar-entrenador.page.html',
  styleUrls: ['./modal-editar-entrenador.page.scss'],
})
export class ModalEditarEntrenadorPage implements OnInit {

  entrenador = {} as Entrenador;
  constructor(private readonly _navParams:NavParams,
              public toastController: ToastController, 
              private readonly _modalController:ModalController,
              private readonly _HttpEntrenadorService:HttpEntrenadorService) {

                this.entrenador = this._navParams.get('entrenador');              

   }

   async presentToast() {
    const toast = await this.toastController.create({
      message: 'No ha hecho ningún cambio',
      duration: 1000
    });
    toast.present();
  }

   async actualizarEntrenador(){
     const $actualizarEntrenador = await this.
   }

   dismiss() {
    this._modalController.dismiss({
      'dismissed': true
    });
  }

  ngOnInit() {
  }

}
