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
  validado = false;
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
    this.precioTotal++;
  }

  eliminarProductoDeFactura(pokemon:Pokemon){
    const indice = this.productoSeleccionado.findIndex((producto)=>{return producto.id == pokemon.id})
    const cantidad = this.productoSeleccionado[indice].cantidad
    if(cantidad>1){
      this.productoSeleccionado[indice].cantidad--;
    }else{
      this.productoSeleccionado.splice(indice,1);
    }
    this.precioTotal--;
  }

  guardarFactura(){
    this.nuevaFactura.id = this._nombreCajeroService.idFactura;
    this.nuevaFactura.totalCompra = this.precioTotal;
    this.nuevaFactura.nombreCajero = this._nombreCajeroService.nombreCajero;
    this._nombreCajeroService.bddFacturas.push(this.nuevaFactura);
    console.log(this._nombreCajeroService.bddFacturas)
  }

  validar():boolean{
    if(this.nuevaFactura.nombre === "" || this.nuevaFactura.cedula.toString() === ""){
      this.validado = false
    }else{
      this.guardarFactura()
      this.validado = false
    }
    return this.validado

  }

}
