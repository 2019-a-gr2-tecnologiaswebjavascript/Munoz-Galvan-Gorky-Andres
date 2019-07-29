import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams, ToastController} from '@ionic/angular';
import {CarritoCompras} from '../dto/carrito-compras';
import {CarritoComprasHttpService} from '../servicios/http/carrito-compras-http.service';

@Component({
  selector: 'app-modal-finalizar-compra',
  templateUrl: './modal-finalizar-compra.page.html',
  styleUrls: ['./modal-finalizar-compra.page.scss'],
})
export class ModalFinalizarCompraPage implements OnInit {

  carritoCompras = {} as CarritoCompras;
  constructor(private readonly _navParams: NavParams, private readonly _ModalController: ModalController,
              private readonly CarritoComprasHttpService: CarritoComprasHttpService,
              private readonly _toastController: ToastController) {

    this.carritoCompras = this._navParams.get('carritoCompras');
    console.log(this.carritoCompras);
  }

  async presentToast(mensaje) {
    const toast = await this._toastController.create({
      message: mensaje,
      duration: 1000
    });
    toast.present();
  }

  guardarFactura() {
    const $guardarFactura = this.CarritoComprasHttpService.crear(this.carritoCompras);
    $guardarFactura.subscribe((value) => {
      this.presentToast('Se guardó la compra');
      this.dismiss('actuliza');
    }, (error) => {
      this.presentToast('Existió un error al guardar la compra');
      this.dismiss('cancelar');
    });

  }

  dismiss(mensaje) {
    console.log(mensaje);
    this._ModalController.dismiss({mensaje});

  }

  ngOnInit() {
  }

}
