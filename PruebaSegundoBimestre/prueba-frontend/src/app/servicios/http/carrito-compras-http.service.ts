import {Injectable} from '@angular/core';
import {HttpSailsPrincipal} from './http-sails-principal';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {CarritoCompras} from '../../dto/carrito-compras';

@Injectable()
export class CarritoComprasHttpService extends HttpSailsPrincipal<CarritoCompras> {

    // tslint:disable-next-line:variable-name
    constructor(private readonly _HttpClient: HttpClient) {
        super(_HttpClient, environment.url, '/Factura');
    }

}
