import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SobreNosotrosPage } from './sobre-nosotros.page';

const routes: Routes = [
  {
    path: '',
    component: SobreNosotrosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SobreNosotrosPage]
})
export class SobreNosotrosPageModule {}
