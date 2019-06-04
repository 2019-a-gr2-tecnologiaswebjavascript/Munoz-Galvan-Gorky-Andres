import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NombreCajeroService } from '../nombre-cajero/nombre-cajero.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  estaLogeado = false;

  constructor(private readonly _router:Router,
    private readonly _nombreCajeroService:NombreCajeroService) { }

  login(){
    if(this._nombreCajeroService.nombreCajero!=""){
      this.estaLogeado = true;
      const url = ['/menu-principal'];
      this._router.navigate(url);
      return true;
    }else{
      alert('Debe ingresar el nombre del cajero');
      return false;
    }

  }

  logout(){
    this.estaLogeado = false;
  }

}

