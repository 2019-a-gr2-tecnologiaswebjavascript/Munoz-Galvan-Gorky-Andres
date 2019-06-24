import { HttpSailsPrincipal } from './http-sails-principal';
import { Injectable } from '@angular/core';
import {ProductoUsuario} from '../../dto/producto-usuario';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class ProductoUsuarioHttpService extends HttpSailsPrincipal<ProductoUsuario>{
    constructor(private readonly _httpClient:HttpClient){
        super(_httpClient,environment.url,'/ProductoUsuario');
    }

}