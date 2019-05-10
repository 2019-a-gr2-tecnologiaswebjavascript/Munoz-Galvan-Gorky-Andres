import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ruta-creditos',
  templateUrl: './ruta-creditos.component.html',
  styleUrls: ['./ruta-creditos.component.css']
})
export class RutaCreditosComponent implements OnInit {

  constructor(private readonly _activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    const parametros$ = this._activatedRoute.params;
    //el signo de dóolar significa que esa variable
    //es un observable
    const parametrosConsulta$ = this._activatedRoute.queryParams; 

    parametrosConsulta$.subscribe(
      (parametrosConsulta)=>{
        console.log('Parametros consulta:',parametrosConsulta);
      }
    )


    console.log('Inicio');
    parametros$.subscribe(
      (parametros)=>{ //ok TRY
        console.log('Parametros',parametros);
      },
      (error)=>{ // :( CATCH
        console.log('Error',error);
      },
      ()=>{ //Completado //Finally --> Opcional
        console.log('Completo');

      }
    )
    console.log('Fin');
  }

}
