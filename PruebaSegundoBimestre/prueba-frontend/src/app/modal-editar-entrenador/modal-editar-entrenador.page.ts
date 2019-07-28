import {Component, OnInit} from '@angular/core';
import {NavParams, ModalController, ToastController} from '@ionic/angular';
import {Entrenador} from '../dto/entrenador';
import {EntrenadorHttpService} from "../servicios/http/entrenador-http.service";

@Component({
    selector: 'app-modal-editar-entrenador',
    templateUrl: './modal-editar-entrenador.page.html',
    styleUrls: ['./modal-editar-entrenador.page.scss'],
})
export class ModalEditarEntrenadorPage implements OnInit {

    formularioCambio = false;
    entrenador = {} as Entrenador;

    constructor(private readonly _navParams: NavParams,
                public toastController: ToastController,
                private readonly _modalController: ModalController,
                private readonly _EntrenadorHttpService: EntrenadorHttpService) {

        this.entrenador = this._navParams.get('entrenador');

    }

    async presentToast(mensaje) {
        const toast = await this.toastController.create({
            message: mensaje,
            duration: 1000
        });
        toast.present();
    }

    async actualizarEntrenador() {
        const $entrenadorActualizado = await this._EntrenadorHttpService.actualizar(this.entrenador, this.entrenador.id);
        $entrenadorActualizado.subscribe((value) => {
                this.presentToast('Se actualizó el entrenador');
                this.dismiss();
            },
            (e) => {
                console.log("error ", e)
                this.presentToast('No actualizó el entrenador');
            })
    }

    cambioCampeonActual() {
        if (this.entrenador.campeonActual === true) {
            this.entrenador.campeonActual = false;
        } else {
            this.entrenador.campeonActual = true;
        }
        this.cambio();
    }

    cambio() {
        this.formularioCambio = true;
    }

    dismiss() {
        this._modalController.dismiss({
            'dismissed': true
        });
    }

    ngOnInit() {
    }

}
