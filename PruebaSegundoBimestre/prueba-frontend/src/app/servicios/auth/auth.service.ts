import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    nombreUsuario = '';
    estaLogeado = false;

    // tslint:disable-next-line:variable-name
    constructor(private readonly _router: Router) {
    }

    login(nombreUsuario) {
        this.nombreUsuario = nombreUsuario;
        this.estaLogeado = true;
        this._router.navigate(['/menu-principal/tabs/tab1']);
        return true;
    }
}
