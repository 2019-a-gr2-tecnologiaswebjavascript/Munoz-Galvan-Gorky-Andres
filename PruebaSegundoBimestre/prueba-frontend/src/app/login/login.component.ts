import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  nombreUsuario: string;
  password: string;

  iniciarSesion() {
    console.log(this.nombreUsuario, ' ', this.password);
  }
  constructor() { }

  ngOnInit() {}

}
