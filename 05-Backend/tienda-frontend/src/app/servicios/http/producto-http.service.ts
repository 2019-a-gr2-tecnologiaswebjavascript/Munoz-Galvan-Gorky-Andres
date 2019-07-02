import { HttpSailsPrincipal } from './http-sails-principal';
import { Injectable } from '@angular/core';
import {Producto} from '../../dto/producto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class ProductoHttpService extends HttpSailsPrincipal<Producto>{
    constructor(private readonly _httpClient:HttpClient){
        super(_httpClient,environment.url,'/Producto');
    }

    cargarArchivo(archivo:File,idProducto:number){
        const formulario:FormData = new FormData();
        formulario.append('imagen',archivo,archivo.name)
        formulario.append('nombre','Gorky');
        formulario.append('apellido','Muñoz');
        formulario.append('sueldo','200');

        const cabeceras: HttpHeaders = new HttpHeaders();
        cabeceras.append('Content-Type','multipart/form-data')
        cabeceras.append('Accept','application/json')

        const opciones = {headers:cabeceras};

        const url = `${this.url}/cargarArchivo/${idProducto}`;

        return this.httpClient.post(url,formulario,opciones);
    }

}