import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AniCerdoPage } from './ani-cerdo.page';

const routes: Routes = [
  {
    path: '',
    component: AniCerdoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AniCerdoPage]
})
export class AniCerdoPageModule {}
