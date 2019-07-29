import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalFinalizarCompraPage } from './modal-finalizar-compra.page';

const routes: Routes = [
  {
    path: '',
    component: ModalFinalizarCompraPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalFinalizarCompraPage]
})
export class ModalFinalizarCompraPageModule {}
