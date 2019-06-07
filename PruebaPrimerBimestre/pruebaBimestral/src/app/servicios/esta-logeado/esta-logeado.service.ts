import { Injectable } from '@angular/core';
import {AuthService} from '../auth/auth.service'
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EstaLogeadoService implements CanActivate {
  constructor(private readonly _authService:AuthService,
              private readonly _router:Router) { }

  canActivate(ActivteRouteSnapshot,RouterStateSnapshot):boolean{
    console.log('Entrando a verificar si esta logeado');
    const estaLogeado = this._authService.estaLogeado;  
    if(estaLogeado){
      console.log('Bienvenido');
      return true;
    }else{
      const url = ['/login'];
      this._router.navigate(url);
      alert('No tienes permisos');
      return false;
    }
  }

}