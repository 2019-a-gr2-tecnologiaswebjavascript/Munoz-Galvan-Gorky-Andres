import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { CarritoService } from '../servicios/carrito/carrito.service';

@Component({
  selector: 'app-item-galeria',
  templateUrl: './item-galeria.component.html',
  styleUrls: ['./item-galeria.component.css']
})
export class ItemGaleriaComponent implements OnInit,OnDestroy {
  

  title = 'floreria';
  url = "http://www.dna-autoparts.com/23121-thickbox_default/bielas-forjadas-eagle-para-sr20det.jpg";
  color = 'red';

  @Input()
  notas;

  @Input()
  titulo;

  @Input()
  nombreItem;

  @Input()
  textoBoton;

  @Output()
  cambioChela:EventEmitter<boolean> = new EventEmitter()

  @Output()
  cambioCerveza:EventEmitter<boolean> = new EventEmitter()

  //Dependency 
  //Injection
  //Injección de dependencias
  constructor(private readonly _carritoService:CarritoService) { }

  ngOnInit() {
    console.log('Empezo');
    console.log(this._carritoService.carritoCompras);
  }

  ngOnDestroy(){
    console.log('Termino');
  }

  alertar(){
    alert('auxilio me desmayo: '+this.nombreItem);
  }

  agregarCarrito(valorCarrito){

    const itemCarrito = {
      valor:valorCarrito,
      nombreTienda: this.titulo
    };

    this._carritoService.carritoCompras
                      .splice(0,0,itemCarrito);
    console.log(this._carritoService.carritoCompras);
  }

  cambiarImagen(){
    //Se pueden definir variables de tres maneras:
    const cerveza = "https://www.ruizhealytimes.com/sites/default/files/styles/articles_horizontal/public/articles/2018/07/unas-chelitas.jpg?itok=-y7ZTNoj";
    const chelas = "http://www.dna-autoparts.com/23121-thickbox_default/bielas-forjadas-eagle-para-sr20det.jpg";

    if(this.url === cerveza){
      this.url = chelas;
      this.cambioChela.emit(true);
      this.color = "verde"
    }else{
      this.url = cerveza;
      this.cambioCerveza.emit(true);
      this.color = "amarillo"
    }
    //No se debe usar var para definir variables
    //var url2 = "https://s.libertaddigital.com/2019/01/02/cerveza-fresca.jpg";
    //let url3 ="https://www.telediariodigital.net/wp-content/uploads/2016/01/cerveza-belga.jpg";
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
