import { Component, OnInit } from '@angular/core';
import { NombreCajeroService } from 'src/app/servicios/nombre-cajero/nombre-cajero.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  nombre:any;
  constructor(private readonly _nombreCajeroService:NombreCajeroService) { }

  ngOnInit() {
  }

  guardarCajero(){
    this._nombreCajeroService.nombreCajero = this.nombre;
    console.log(this.nombre);
    
  }

}
