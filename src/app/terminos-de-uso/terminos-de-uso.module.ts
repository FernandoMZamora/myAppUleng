import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TerminosDeUsoPage } from './terminos-de-uso.page';

const routes: Routes = [
  {
    path: '',
    component: TerminosDeUsoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TerminosDeUsoPage]
})
export class TerminosDeUsoPageModule {}
