import { Component, OnInit } from '@angular/core';
import {CajeroHttpService} from '../servicios/http/cajero-http.service';
import {Router} from '@angular/router';
import {ToastController} from '@ionic/angular';
import {Cajero} from "../dto/cajero";
import {AuthService} from "../servicios/auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private readonly _CajeroHttpService: CajeroHttpService, private readonly _Route: Router,
              public toastController: ToastController, private readonly _AuthService: AuthService) {  }

  nombreUsuario: string;
  password: string;

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'No existe el cajero en la base',
      duration: 2000
    });
    toast.present();
  }

  x:any;

    iniciarSesion() {
        const cajero: Cajero = {
            nombreCajero: this.nombreUsuario,
            password: this.password
        };


        this._CajeroHttpService.obtenerLogin(cajero).subscribe(
            value => {
                this.x = value;
                if (this.x.cajero.length === 0) {
                    this.presentToast();
                } else {
                    this._AuthService.login(this.nombreUsuario);
                }
            },
            error1 => {
                console.log(error1);
            }
        );
    }

  ngOnInit() {}

}
