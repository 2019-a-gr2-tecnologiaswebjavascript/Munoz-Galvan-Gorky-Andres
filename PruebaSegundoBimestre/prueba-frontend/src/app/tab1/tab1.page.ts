import {Component, OnInit} from '@angular/core';
import {Pokemon} from '../dto/pokemon';
import {PokemonHttpService} from '../servicios/http/pokemon-http.service';
import {AuthService} from '../servicios/auth/auth.service';
import {CarritoCompras} from '../dto/carrito-compras';
import {PokemonSeleccionado} from '../dto/pokemonSeleccionado';
import {ModalCrearPokemonPage} from "../modal-crear-pokemon/modal-crear-pokemon.page";
import {ModalController} from "@ionic/angular";
import {ModalFinalizarCompraPage} from "../modal-finalizar-compra/modal-finalizar-compra.page";

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

    pokemones: Pokemon[];
    nombreCajero = '';
    carritoCompras = {} as CarritoCompras;
    pokemonesSeleccionados: PokemonSeleccionado[] = [];

    // tslint:disable-next-line:variable-name
    constructor(private readonly _PokemonHttpService: PokemonHttpService,
                private readonly _AuthService: AuthService,
                private readonly _modalController: ModalController) {

        this.updateUI();
    }

    updateUI() {
        this.listarPokemones();
        this.pokemonesSeleccionados = [];
        this.nombreCajero = this._AuthService.nombreUsuario;
        this.carritoCompras.nombreCajero = this.nombreCajero;
        this.carritoCompras.total = 0;
    }

    async finalizarCompra() {
        const modalCrearPokemon = await this._modalController.create({
            component: ModalFinalizarCompraPage,
            componentProps: {
                carritoCompras: this.carritoCompras
            }
        });
        modalCrearPokemon.onDidDismiss().then((dato) => {
                if (dato.data.mensaje !== 'cancelar') {
                    this.updateUI();
                }
            }
        );
        return modalCrearPokemon.present();
    }


    calcularPrecioTotal() {
        this.carritoCompras.total = this.pokemonesSeleccionados
            .reduce(
                (previousValue, currentValue) => previousValue + currentValue.total, 0);
    }

    aumentarCantidad(pokemon: Pokemon) {

        const indice = this.pokemonesSeleccionados
            .findIndex(
                (value) => {
                    return value.nombre === pokemon.nombrePokemon;
                }
            );
        if (indice >= 0) {
            this.pokemonesSeleccionados[indice].cantidad = this.pokemonesSeleccionados[indice].cantidad + 1;
            const precio = this.pokemonesSeleccionados[indice].precio;
            const cantidad = this.pokemonesSeleccionados[indice].cantidad;
            this.pokemonesSeleccionados[indice].total = cantidad * precio;
        } else {
            const pokemonSeleccionado = {} as PokemonSeleccionado;
            pokemonSeleccionado.nombre = pokemon.nombrePokemon;
            pokemonSeleccionado.cantidad = 1;
            pokemonSeleccionado.precio = pokemon.precioPokemon;
            pokemonSeleccionado.total = pokemonSeleccionado.precio * pokemonSeleccionado.cantidad;
            this.pokemonesSeleccionados.push(pokemonSeleccionado);
        }
        this.calcularPrecioTotal();
    }

    disminuiCantidad(pokemonSeleccionado: PokemonSeleccionado) {
        const indice = this.pokemonesSeleccionados
            .findIndex(
                (value) => {
                    return value.nombre === pokemonSeleccionado.nombre;
                }
            );
        const cantidad = this.pokemonesSeleccionados[indice].cantidad;
        if (cantidad === 1) {
            this.pokemonesSeleccionados.splice(indice, 1);
        } else {
            this.pokemonesSeleccionados[indice].cantidad -= 1;
            const nuevaCantidad = this.pokemonesSeleccionados[indice].cantidad;
            const precio = this.pokemonesSeleccionados[indice].precio;
            this.pokemonesSeleccionados[indice].total = nuevaCantidad * precio;
        }
        this.calcularPrecioTotal();
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
    }

}
