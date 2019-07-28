import {Component, OnInit} from '@angular/core';
import {PokemonHttpService} from '../servicios/http/pokemon-http.service';
import {ModalCrearEntrenadorPage} from "../modal-crear-entrenador/modal-crear-entrenador.page";
import {ModalController} from "@ionic/angular";
import {ActivatedRoute} from "@angular/router";
import {ModalCrearPokemonPage} from "../modal-crear-pokemon/modal-crear-pokemon.page";
import {ModalEditarPokemonPage} from "../modal-editar-pokemon/modal-editar-pokemon.page";

@Component({
    selector: 'app-pokemon',
    templateUrl: './pokemon.page.html',
    styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage implements OnInit {

    pokemones: any = [];
    auxPokemones: any = [];
    pokemonABuscar = '';
    idEntrenador = 0;

    // tslint:disable-next-line:variable-name
    constructor(private readonly _PokemonHttpService: PokemonHttpService,
                // tslint:disable-next-line:variable-name variable-name
                private readonly _ActivatedRoute: ActivatedRoute,
                private readonly _modalController: ModalController) {
    }

    buscarPokemon() {
        if (this.pokemonABuscar.length === 0) {
            this.listarPokemones(this.idEntrenador);
        } else {
            const datos = {idEntrenador: this.idEntrenador, nombrePokemon: this.pokemonABuscar};
            const $buscarPokemon = this._PokemonHttpService.buscarPokemonPorNombre(datos);
            $buscarPokemon.subscribe((value) => {
                this.auxPokemones = value;
                this.pokemones = this.auxPokemones;
            });
            this.pokemonABuscar = '';
        }
    }



    listarPokemones(idEntrenador) {
        const $listaPokemones = this._PokemonHttpService.buscarPorIdEntrenador(idEntrenador);
        $listaPokemones.subscribe(
            (value) => {
                this.pokemones = value;
                console.log(this.pokemones);
            },
                (error) => {
                    console.log('error ', error);
                });
    }

    async crearPokemon() {

        const modalCrearPokemon = await this._modalController.create({
            component: ModalCrearPokemonPage,
            componentProps: {
                idEntrenador: this.idEntrenador
            }
        });
        modalCrearPokemon.onDidDismiss().then(() => {
                this.listarPokemones(this.idEntrenador);
            }
        );
        return modalCrearPokemon.present();

    }

    async editarPokemon(pokemon) {
        const modalEditarPokemon = await this._modalController.create({
            component: ModalEditarPokemonPage,
            componentProps: {
                pokemon
            }
        });
        modalEditarPokemon.onDidDismiss().then(() => {
                this.listarPokemones(this.idEntrenador);
            }
        );
        return modalEditarPokemon.present();

    }

    eliminarPokemon(id) {
        const $listaPokemones = this._PokemonHttpService.borrar(id);
        $listaPokemones.subscribe((data) => {
                this.listarPokemones(this.idEntrenador);
            },
            (error) => {
                console.log('error ', error);
            }
        );
    }

    ngOnInit() {
        this.idEntrenador = Number(this._ActivatedRoute.snapshot.paramMap.get('idEntrenador'));
        this.listarPokemones(this.idEntrenador);
    }

}
