import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalCrearEntrenadorPage } from './modal-crear-entrenador.page';

const routes: Routes = [
  {
    path: '',
    component: ModalCrearEntrenadorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalCrearEntrenadorPage]
})
export class ModalCrearEntrenadorPageModule {}
