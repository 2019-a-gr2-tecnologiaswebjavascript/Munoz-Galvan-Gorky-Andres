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
  constructor(private readonly _nombreCajeroService:NombreCajeroService) { }

  ngOnInit() {
  }

  guardarNuevoEntrenador(){
    this.nuevoEntrenador.id = this._nombreCajeroService.idEntrenador;
    
    this._nombreCajeroService.bddEntrenadores.push(this.nuevoEntrenador);
    this._nombreCajeroService.idEntrenador++;
    this.nuevoEntrenador={} as any;
  }

  eliminarEntrenador(index:number){
    this._nombreCajeroService.bddEntrenadores.splice(index,1);
    console.log(this._nombreCajeroService.bddEntrenadores);
  }

}
