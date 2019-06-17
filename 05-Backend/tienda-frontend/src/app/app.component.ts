import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'tienda-frontend';

  constructor(private readonly _HttpClient:HttpClient){

  }

  ngOnInit(){
    const url = environment.url + "/Usuario";
    const listraUsuarios$ = this._HttpClient.get(url)

    listraUsuarios$.subscribe(
      (datos)=>{
        console.log(datos);
    },
    (error)=>{
      console.log(error);
    }
    )
  }


}
