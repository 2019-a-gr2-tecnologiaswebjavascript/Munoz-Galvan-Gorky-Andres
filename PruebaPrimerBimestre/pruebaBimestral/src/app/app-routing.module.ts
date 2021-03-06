import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPrincipalComponent } from './rutas/menu-principal/menu-principal.component';
import { LoginComponent } from './rutas/login/login.component';
import { ReavisarComprasComponent } from './rutas/reavisar-compras/reavisar-compras.component';
import { GestionEntrenadorComponent } from './rutas/gestion-entrenador/gestion-entrenador.component';
import { GestionPokemonComponent } from './rutas/gestion-pokemon/gestion-pokemon.component';
import { ComprarComponent } from './rutas/comprar/comprar.component';
import {EstaLogeadoService} from './servicios/esta-logeado/esta-logeado.service'

const routes: Routes = [
  {
    path:'login',component:LoginComponent
  },{
    path:'menu-principal',
    component:MenuPrincipalComponent,
    canActivate:[EstaLogeadoService]
  },
  {
    path:'gestionar-entrenador',
    component:GestionEntrenadorComponent,
    canActivate:[EstaLogeadoService]
  },{
    path:'gestionar-pokemon/:entrenadorId',
    component:GestionPokemonComponent,
    canActivate:[EstaLogeadoService]
  },{
    path:'revisar-compra',
    component:ReavisarComprasComponent,
    canActivate:[EstaLogeadoService]
  },{
    path:'comprar',
    component:ComprarComponent,
    canActivate:[EstaLogeadoService]
  },{
    path:'',redirectTo:'login',pathMatch:'full'
  },{
    path:'**',redirectTo:'login',pathMatch:'full'
  }
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
