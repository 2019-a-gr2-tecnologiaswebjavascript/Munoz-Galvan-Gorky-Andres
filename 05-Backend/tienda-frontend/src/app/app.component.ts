import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UsuarioHttpService } from './servicios/http/usuario-http.service';
import { ProductoHttpService } from './servicios/http/producto-http.service';
import { ProductoUsuarioHttpService } from './servicios/http/producto-usuario-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'tienda-frontend';

  constructor(private readonly _HttpClient:HttpClient,
              private readonly _usuarioHttpService:UsuarioHttpService,
              private readonly _productoHttpService:ProductoHttpService,
              private readonly _productoUsuarioHttpService:ProductoUsuarioHttpService){
  }

  ngOnInit(){
    const usuarioCrear$ = this._usuarioHttpService
    .crear({
      nombre:"Felipe",
      apellido:"Caicedo",
      cedula:"1104552268",
      correo:'gorkymunoz@hotmail.com',
      estaCasado:false,
      username:'gorks',
      sueldo:120,
      tipoUsuario:'normal',
    });

    usuarioCrear$.subscribe(
      (nuevoUsuario)=>{
        console.log(nuevoUsuario);
      },
      (error)=>{
        console.error(error);
      }
    );

    const productoCrear$ = this._productoHttpService
      .crear({
        nombre:"Lavadora",
        codigo:"2547"
      });

    productoCrear$
      .subscribe(
        (nuevoProducto)=>{
          console.log(nuevoProducto);
        },
        (error)=>{
          console.error(error);
        },
      );

      const productoUsuarioCrear$ = this._productoUsuarioHttpService
      .crear({
        cantidad:25,
        fkUsuario:1,
        fkProducto:1}); 

      productoUsuarioCrear$.subscribe(
        (nuevoProductoUsuario)=>{
          console.log(nuevoProductoUsuario)
        },
        (error)=>{
          console.log(error);
        });
  }
/*
  ngOnInit(){
    const usuarios$ = this._usuarioHttpService.buscarTodos();
    usuarios$.subscribe(
      (registro)=>{
        console.log(registro);
      },
      (error)=>{
        console.error(error);
      }
    );

  }
*/
}
