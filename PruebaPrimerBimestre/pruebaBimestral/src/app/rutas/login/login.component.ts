import { Component, OnInit } from '@angular/core';
import { NombreCajeroService } from 'src/app/servicios/nombre-cajero/nombre-cajero.service';
import { AuthService } from 'src/app/servicios/auth/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  nombre:any="";
  constructor(private readonly _nombreCajeroService:NombreCajeroService,private readonly _authService:AuthService) { }

  ngOnInit() {
  }

  guardarCajero(){
    this._nombreCajeroService.nombreCajero = this.nombre;
    this._authService.login();
    console.log(this.nombre);
    
  }

}
