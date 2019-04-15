import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemGaleriaComponent } from './item-galeria/item-galeria.component';
import { CarritoService } from './servicios/carrito/carrito.service';
import { MostrarCarritoComponent } from './mostrar-carrito/mostrar-carrito.component';

@NgModule({
  declarations: [ //En los declarations se guardan los componentes
    AppComponent,
    ItemGaleriaComponent,
    MostrarCarritoComponent
  ],
  imports: [ //Aquí se guardan otros módulos
    BrowserModule // Directiva 
  ],
  providers: [ //Aqui se guardan los servicios
    CarritoService

  ], 
  bootstrap: [AppComponent] //Aquí va el componente principal
})
export class AppModule { }
