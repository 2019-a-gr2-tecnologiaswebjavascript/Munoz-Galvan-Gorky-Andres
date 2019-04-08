import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-galeria',
  templateUrl: './item-galeria.component.html',
  styleUrls: ['./item-galeria.component.css']
})
export class ItemGaleriaComponent implements OnInit {

  title = 'floreria';

  @Input()
  nombreItem;

  @Input()
  textoBoton;


  constructor() { }

  ngOnInit() {
  }

  alertar(){
    alert('auxilio me desmayo: '+this.nombreItem);
  }

}/*
@DecoratorsClase()
class Usuario{
  @DecoratorsVariable()
  private nombre = 'Gorky';
  constructor(@DecoratorsConstructor() nombre){

  }

  @DecoratorsMetodo()  
  metodoPublico(){}
  private metodoPrivado(){}
  protected metodoProtected(){}

}*/
