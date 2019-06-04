import { Component, OnInit } from '@angular/core';
import { Entrenador } from 'src/app/interfaces/entrenador';
import { NombreCajeroService } from 'src/app/servicios/nombre-cajero/nombre-cajero.service';

@Component({
  selector: 'app-gestion-entrenador',
  templateUrl: './gestion-entrenador.component.html',
  styleUrls: ['./gestion-entrenador.component.css']
})
export class GestionEntrenadorComponent implements OnInit {

  nuevoEntrenador:Entrenador= {} as any; 
  entrenadoresLocales:Entrenador[]=[];
  nombreEntrenadorBuscar="";
  constructor(private readonly _nombreCajeroService:NombreCajeroService) {
    this.actualizarEntrenadoresLocales();
   }

  ngOnInit() {
  }

  guardarNuevoEntrenador(){
    this.nuevoEntrenador.id = this._nombreCajeroService.idEntrenador;
    
    this._nombreCajeroService.bddEntrenadores.push(this.nuevoEntrenador);
    this._nombreCajeroService.idEntrenador++;
    this.nuevoEntrenador={} as any;
    this.actualizarEntrenadoresLocales();
  }

  eliminarEntrenador(index:number){
    this._nombreCajeroService.bddEntrenadores.splice(index,1);
    console.log(this._nombreCajeroService.bddEntrenadores);
    this.actualizarEntrenadoresLocales();
  }

  actualizarEntrenadoresLocales(){
    this.entrenadoresLocales = this._nombreCajeroService.bddEntrenadores;
  }

  buscarEntrenadorPorNombre(){
    this.entrenadoresLocales = this._nombreCajeroService.bddEntrenadores
    .filter(
      (entrenador)=>{
        return entrenador.nombre.toUpperCase().includes(this.nombreEntrenadorBuscar.toUpperCase());
      });
  }

}
