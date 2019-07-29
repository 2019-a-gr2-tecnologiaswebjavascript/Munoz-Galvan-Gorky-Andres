import {Component, OnInit} from '@angular/core';
import {CarritoCompras} from '../dto/carrito-compras';
import {CarritoComprasHttpService} from '../servicios/http/carrito-compras-http.service';

@Component({
    selector: 'app-tab3',
    templateUrl: 'tab3.page.html',
    styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

    listaFacturas: CarritoCompras[] = [];
    parametroABuscar = '';

    // tslint:disable-next-line:variable-name
    constructor(private readonly _CarritoComprasHttpService: CarritoComprasHttpService) {
    }

    buscarFactura() {

        

    }

    listarFacturas() {
        const $facturas = this._CarritoComprasHttpService.buscarTodos();
        $facturas.subscribe((value) => {
            this.listaFacturas = value;
        }, (error) => {
            console.log('error ', error);
        });
    }

    ngOnInit(): void {
        this.listarFacturas();
    }

}
