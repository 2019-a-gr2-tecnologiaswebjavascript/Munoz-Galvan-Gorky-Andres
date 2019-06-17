import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UsuarioHttpService } from './servicios/http/usuario-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'tienda-frontend';

  constructor(private readonly _HttpClient:HttpClient,
              private readonly _usuarioHttpService:UsuarioHttpService){
  }

  ngOnInit(){
    const usuarioCrear$ = this._usuarioHttpService
    .crear({nombre:"Felipe",apellido:"Caicedo"});

    usuarioCrear$.subscribe(
      (nuevoUsuario)=>{
        console.log(nuevoUsuario);
      },
      (error)=>{
        console.error(error);
      }
    );
  }
}
