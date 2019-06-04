import { Component, OnInit } from '@angular/core';
import { NombreCajeroService } from 'src/app/servicios/nombre-cajero/nombre-cajero.service';
import { Factura } from 'src/app/interfaces/factura';
import { Pokemon } from 'src/app/interfaces/pokemon';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnInit {

  nuevaFactura:Factura={} as any;
  precioTotal:number=0;
  productoAIngresar:Pokemon={} as any;
  productoSeleccionado:Pokemon[]=[];

  constructor(private readonly _nombreCajeroService:NombreCajeroService) { 

  }

  ngOnInit() {
  }

  ingresarPokemonAFactura(pokemon:Pokemon){
    const existeProducto = this.productoSeleccionado.find((producto)=>{return producto.id == pokemon.id});
    if(existeProducto){
      const indice = this.productoSeleccionado.findIndex((producto)=>{return producto.id == pokemon.id})
      this.productoSeleccionado[indice].cantidad++;
    }else{
      this.productoAIngresar = pokemon;
      this.productoAIngresar.cantidad = 1;
      this.productoSeleccionado.push(this.productoAIngresar);
    }
  }

  eliminarProductoDeFactura(pokemon:Pokemon){
    const indice = this.productoSeleccionado.findIndex((producto)=>{return producto.id == pokemon.id})
    const cantidad = this.productoSeleccionado[indice].cantidad
    if(cantidad>1){
      this.productoSeleccionado[indice].cantidad--;
    }else{
      this.productoSeleccionado.splice(indice,1);
    }
  }

}
