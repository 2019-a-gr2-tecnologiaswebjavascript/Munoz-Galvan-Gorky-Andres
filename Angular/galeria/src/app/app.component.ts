import { Component } from '@angular/core';
import { CarritoService } from './servicios/carrito/carrito.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Floreria';
  color = "rojo";
  estaMostrando = false;

  arregloFlores = [
    {
      titulo:"Don José",
      nombre:"Papitas",
      descripcion:"A lo bestia",
      notas:[
        'Perro',
        'Hamburguesa'
      ]
    },{
      titulo:"Don Pepito",
      nombre:"Carnitas",
      descripcion:"Gorditas",
      notas:[
        'Papitas',
        'Empanadas'
      ]
    },{
      titulo:"Doña María",
      nombre:"Chicas",
      descripcion:"Cheveres",
      notas:[
        'Mote',
        'Fritada'
      ]
    }
  ];

  constructor(private readonly _carritoService:CarritoService){
  
  }

  cambioChela(evento:boolean){
    console.log('Llego a chela',evento)
    this.color = "verde"


  }

  cambioCerveza(evento:boolean){
    console.log('Llego a cerveza',evento)
    this.color = "amarillo"

  }

  mostrar(estaMostrando){
    this.estaMostrando = estaMostrando;
  }
}
