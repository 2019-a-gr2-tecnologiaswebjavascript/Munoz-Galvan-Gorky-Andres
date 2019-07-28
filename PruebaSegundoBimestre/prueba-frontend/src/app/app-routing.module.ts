import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  { path: 'menu-principal', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'modal-editar-entrenador', loadChildren: './modal-editar-entrenador/modal-editar-entrenador.module#ModalEditarEntrenadorPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
