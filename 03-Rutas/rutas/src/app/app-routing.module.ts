import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RutaHomeComponent } from './rutas/ruta-home/ruta-home.component';
import { RutaCreditosComponent } from './rutas/ruta-creditos/ruta-creditos.component';
import { RutaProductosComponent } from './rutas/ruta-productos/ruta-productos.component';
import { RutaNoEncontradaComponent } from './rutas/ruta-no-encontrada/ruta-no-encontrada.component';
import { EstaLogeadoService } from './servicios/guards/esta-logeado.service';

const routes: Routes = [
  {
    path:'home',
    component: RutaHomeComponent
  },
  {
    path:'creditos/:idCredito/:tasaReferencia',
    component: RutaCreditosComponent,
    canActivate: [
      EstaLogeadoService
    ]
  },
  {
    path:'productos',
    component: RutaProductosComponent
  },
  {
    path:'no-encontrada',
    component: RutaNoEncontradaComponent
  },
  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path:'**',
    component: RutaNoEncontradaComponent
  },
  
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes,{
      useHash:true
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
