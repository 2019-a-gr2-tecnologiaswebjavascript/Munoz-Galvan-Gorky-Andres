import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalCrearPokemonPage } from './modal-crear-pokemon.page';

const routes: Routes = [
  {
    path: '',
    component: ModalCrearPokemonPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalCrearPokemonPage]
})
export class ModalCrearPokemonPageModule {}
