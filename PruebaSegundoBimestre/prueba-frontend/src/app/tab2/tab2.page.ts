import { Component, OnInit } from '@angular/core';
import {Entrenador} from '../dto/entrenador'
import { EntrenadorHttpService } from '../servicios/http/entrenador-http.service';
import { NavController, ModalController  } from '@ionic/angular';
import { ModalEditarEntrenadorPage } from '../modal-editar-entrenador/modal-editar-entrenador.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  entrenadorABuscar;
  entrenadores:Entrenador[]=[];
  constructor(private readonly _EntrenadorHttpService:EntrenadorHttpService,
    private readonly _navController:NavController, private readonly _modalController:ModalController
    ) {}

  buscarEntrenador(){
    const $BuscarEntrenador = this._EntrenadorHttpService.buscarTodos()
  }

  async openModal(entrenador){

    const modalEditarEntrenador = await this._modalController.create({component:ModalEditarEntrenadorPage,
    componentProps:{
      entrenador: entrenador
    }})
    return await modalEditarEntrenador.present();
  }

  irAPokemon(id:number){


    console.log(id);
  }

  eliminarEntrenador(id:number){
    const $listaEntrenadores = this._EntrenadorHttpService.borrar(id);
    $listaEntrenadores.subscribe((value)=>{
      this.entrenadores = value;
      console.log(this.entrenadores);
    },
    (error)=>{
      console.log("error",error);
    });
  }

  editarEntrenador(entrenador){
    console.log(entrenador);
  }

   listarEntrenadores(){
    const $listaEntrenadores = this._EntrenadorHttpService.buscarTodos();
    $listaEntrenadores.subscribe((value)=>{
      this.entrenadores = value;
      console.log(this.entrenadores);
    },
    (error)=>{
      console.log("error",error);
    });
  }

  ngOnInit(){
    this.listarEntrenadores();
   
  }

}
