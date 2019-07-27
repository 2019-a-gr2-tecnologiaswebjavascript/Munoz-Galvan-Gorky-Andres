import {Injectable} from '@angular/core';
import {HttpSailsPrincipal} from './http-sails-principal';
import {Cajero} from '../../dto/cajero';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable()
export class CajeroHttpService extends HttpSailsPrincipal<Cajero> {

    // tslint:disable-next-line:variable-name
    constructor(private readonly _HttpClient: HttpClient) {
        super(_HttpClient, environment.url, '/Cajero');
    }

}
