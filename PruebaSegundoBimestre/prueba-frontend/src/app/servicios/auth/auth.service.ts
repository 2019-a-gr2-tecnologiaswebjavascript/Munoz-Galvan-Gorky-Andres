import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    estaLogeado = false;
    // tslint:disable-next-line:variable-name
    constructor(private readonly _router: Router) {
    }

    login() {
            this.estaLogeado = true;
            const url = ['/menu-principal'];
            this._router.navigate(url);
            return true;
    }
}
