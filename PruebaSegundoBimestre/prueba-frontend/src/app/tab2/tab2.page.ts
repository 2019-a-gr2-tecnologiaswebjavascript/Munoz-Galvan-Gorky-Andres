import {Component, OnInit} from '@angular/core';
import {Entrenador} from '../dto/entrenador'
import {EntrenadorHttpService} from '../servicios/http/entrenador-http.service';
import {NavController, ModalController} from '@ionic/angular';
import {ModalEditarEntrenadorPage} from '../modal-editar-entrenador/modal-editar-entrenador.page';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

    entrenadorABuscar = '';
    entrenadores: any;
    entrenadoresAux: any;

    // tslint:disable-next-line:variable-name
    constructor(private readonly _EntrenadorHttpService: EntrenadorHttpService,
                // tslint:disable-next-line:variable-name
                private readonly _navController: NavController, private readonly _modalController: ModalController
    ) {
    }

    buscarEntrenador() {
        if (this.entrenadorABuscar.length === 0) {
            this.listarEntrenadores();
        } else {
            try {
                const $entrenadorBusqueda = this._EntrenadorHttpService.buscar('buscarEntrenador', this.entrenadorABuscar)
                $entrenadorBusqueda.subscribe(
                    value => {
                        this.entrenadoresAux = value;
                        this.entrenadores = this.entrenadoresAux.entrenador;
                    },
                    error1 => {
                        console.log(error1);
                    }
                );
                this.entrenadorABuscar = '';
            } catch
                (e) {
                console.log(e);
            }
        }
    }

    async crearEntrenador(){

    }

    async openModal(entrenador) {

        const modalEditarEntrenador = await this._modalController.create({
            component: ModalEditarEntrenadorPage,
            componentProps: {
                entrenador
            }
        })
        return await modalEditarEntrenador.present();
    }

    eliminarEntrenador(id: number) {
        const $listaEntrenadores = this._EntrenadorHttpService.borrar(id);
        $listaEntrenadores.subscribe((value) => {
            this.listarEntrenadores();
            },
            (error) => {
                console.log('error', error);
            });
    }

    listarEntrenadores() {
        const $listaEntrenadores = this._EntrenadorHttpService.buscarTodos();
        $listaEntrenadores.subscribe((value) => {
                this.entrenadores = value;
                console.log(this.entrenadores);
            },
            (error) => {
                console.log('error', error);
            });
    }

    ngOnInit() {
        this.listarEntrenadores();
    }

}
