import { Component } from '@angular/core';

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
      nombre:"Papitas",
      descripcion:"A lo bestia"
    },{
      nombre:"Carnitas",
      descripcion:"Gorditas"
    },{
      nombre:"Chicas",
      descripcion:"Cheveres"
    }
  ];

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
