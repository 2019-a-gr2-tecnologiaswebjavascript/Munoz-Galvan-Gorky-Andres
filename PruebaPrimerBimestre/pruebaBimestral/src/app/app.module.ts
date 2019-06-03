import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormGroup,FormBuilder,FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './rutas/login/login.component';
import { MenuPrincipalComponent } from './rutas/menu-principal/menu-principal.component';
import { GestionEntrenadorComponent } from './rutas/gestion-entrenador/gestion-entrenador.component';
import { GestionPokemonComponent } from './rutas/gestion-pokemon/gestion-pokemon.component';
import { ComprarComponent } from './rutas/comprar/comprar.component';
import { ReavisarComprasComponent } from './rutas/reavisar-compras/reavisar-compras.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuPrincipalComponent,
    GestionEntrenadorComponent,
    GestionPokemonComponent,
    ComprarComponent,
    ReavisarComprasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
