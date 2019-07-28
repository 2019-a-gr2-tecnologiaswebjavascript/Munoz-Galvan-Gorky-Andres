import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../dto/pokemon";
import {PokemonHttpService} from "../servicios/http/pokemon-http.service";
import {AuthService} from "../servicios/auth/auth.service";

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

    pokemones: Pokemon[];
    nombreCajero = '';

    // tslint:disable-next-line:variable-name
    constructor(private readonly _PokemonHttpService: PokemonHttpService, private readonly _AuthService: AuthService) {
    }

    listarPokemones() {
        const $pokemonesDisponibles = this._PokemonHttpService.buscarTodos();
        try {
            $pokemonesDisponibles.subscribe((value) => {
                this.pokemones = value;
            }, (error) => {
                console.log('error ', error);
            });
        } catch (e) {
            console.log('exception ', e);
        }
    }

    ngOnInit(): void {
        this.nombreCajero = this._AuthService.nombreUsuario;
        this.listarPokemones();
    }

}
