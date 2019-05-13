import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-ruta-home',
  templateUrl: './ruta-home.component.html',
  styleUrls: ['./ruta-home.component.css']
})
export class RutaHomeComponent implements OnInit {

  constructor(private readonly _authService: AuthService) { }



  ngOnInit() {
  }

  login(){
    console.log('Estamos logeando');
    this._authService.login('1234','gorky');
  }

  logout(){
    console.log('Saliendo del sistemas');
    this._authService.logout();
  }

}
