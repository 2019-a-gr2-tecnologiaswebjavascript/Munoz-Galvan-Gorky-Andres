import { Component, OnInit } from '@angular/core';
import { NombreCajeroService } from 'src/app/servicios/nombre-cajero/nombre-cajero.service';
import { Factura } from 'src/app/interfaces/factura';

@Component({
  selector: 'app-reavisar-compras',
  templateUrl: './reavisar-compras.component.html',
  styleUrls: ['./reavisar-compras.component.css']
})
export class ReavisarComprasComponent implements OnInit {

  buscarFactura:string="";
  facturasLocales:Factura[]=[];

  constructor(private readonly _nombreCajeroService:NombreCajeroService) {
    this.facturasLocales = _nombreCajeroService.bddFacturas;
   }
  ngOnInit() {
  }

  buscarFacturaPorNombre(){
    this.facturasLocales = this._nombreCajeroService.bddFacturas.filter(
      (factura)=>
      {
        return factura.nombre.toUpperCase().includes(this.buscarFactura.toUpperCase());
      });
      console.log(this.facturasLocales);

  }

  buscarFacturaPorNombreCajero(){
    this.facturasLocales = this._nombreCajeroService.bddFacturas.filter(
      (factura)=>
      {
        return factura.nombreCajero.toUpperCase().includes(this.buscarFactura.toUpperCase());
      });
      console.log(this.facturasLocales);
  }
}
