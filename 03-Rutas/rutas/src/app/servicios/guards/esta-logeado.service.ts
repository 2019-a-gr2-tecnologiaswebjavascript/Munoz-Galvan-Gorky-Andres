import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

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
      const url = ['/home'];
      this._router.navigate(url);
      alert('No tienes permisos');
      return false;
    }
  }

}
