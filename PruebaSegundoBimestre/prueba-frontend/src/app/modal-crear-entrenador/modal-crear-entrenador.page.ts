import { Component, OnInit } from '@angular/core';
import {Entrenador} from "../dto/entrenador";
import {ModalController, NavController, ToastController} from "@ionic/angular";
import {EntrenadorHttpService} from '../servicios/http/entrenador-http.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-modal-crear-entrenador',
  templateUrl: './modal-crear-entrenador.page.html',
  styleUrls: ['./modal-crear-entrenador.page.scss'],
})
export class ModalCrearEntrenadorPage implements OnInit {

  nuevoEntrenador = {} as Entrenador;
  // tslint:disable-next-line:variable-name
  constructor(private readonly _modalController: ModalController,
              private readonly _toastController: ToastController,
              private readonly _Route:Router,
              private readonly _EntrenadorHttpService: EntrenadorHttpService) {
  }

  cambioFecha() {
    const fecha = this.nuevoEntrenador.fechaNacimiento;
    this.nuevoEntrenador.fechaNacimiento = fecha.substr(0, 10);
  }


  cambioCampeonActual() {
    if (this.nuevoEntrenador.campeonActual === true) {
      this.nuevoEntrenador.campeonActual = false;
    } else {
      this.nuevoEntrenador.campeonActual = true;
    }
  }

  async presentToast(mensaje) {
    const toast = await this._toastController.create({
      message: mensaje,
      duration: 1000
    });
    toast.present();
  }

  guardarEntrenador() {
    const $nuevoEntrenador = this._EntrenadorHttpService.crear(this.nuevoEntrenador);
    $nuevoEntrenador.subscribe((value) => {
      this.presentToast('Se creó el entrenador');
      this.dismiss();
    }, (error) => {
      this.presentToast('Existió un problema al crear el entrenador');
    });
  }

  dismiss() {
    this._modalController.dismiss();
  }


  ngOnInit() {
  }

}
