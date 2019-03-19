import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-num-cero',
  templateUrl: './num-cero.page.html',
  styleUrls: ['./num-cero.page.scss'],
})
export class NumCeroPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/home"]);
  }

  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  siguiente(){
    this.router.navigate(["/num-uno"]);
  }

}
