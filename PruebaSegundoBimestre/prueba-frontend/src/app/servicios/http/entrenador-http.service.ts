import {Injectable} from '@angular/core';
import {HttpSailsPrincipal} from './http-sails-principal';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Entrenador } from 'src/app/dto/entrenador';

@Injectable()
export class EntrenadorHttpService extends HttpSailsPrincipal<Entrenador>{

    // tslint:disable-next-line:variable-name
    constructor(private readonly _HttpClient: HttpClient) {
        super(_HttpClient, environment.url, '/Entrenador');
    }

    buscarEntrenador(parametroBusqueda) {
        return this._HttpClient.get(environment.url + '/Entrenador/buscar?buscarEntrenador=' + parametroBusqueda);
    }

}