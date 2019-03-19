import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AniGallinaPage } from './ani-gallina.page';

const routes: Routes = [
  {
    path: '',
    component: AniGallinaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AniGallinaPage]
})
export class AniGallinaPageModule {}
