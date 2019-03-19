import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ColorNaranjaPage } from './color-naranja.page';

const routes: Routes = [
  {
    path: '',
    component: ColorNaranjaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ColorNaranjaPage]
})
export class ColorNaranjaPageModule {}
