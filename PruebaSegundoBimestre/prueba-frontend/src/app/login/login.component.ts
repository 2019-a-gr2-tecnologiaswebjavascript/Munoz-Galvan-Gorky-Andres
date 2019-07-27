import { Component, OnInit } from '@angular/core';
import {CajeroHttpService} from "../servicios/http/cajero-http.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  nombreUsuario: string;
  password: string;

  iniciarSesion() {
    this._CajeroHttpService.buscarTodos();
  }
  // tslint:disable-next-line:variable-name
  constructor(private readonly _CajeroHttpService: CajeroHttpService) {  }

  ngOnInit() {}

}
