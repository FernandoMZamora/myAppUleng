import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-color-blanco',
  templateUrl: './color-blanco.page.html',
  styleUrls: ['./color-blanco.page.scss'],
})
export class ColorBlancoPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/home"]);
  }

  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  siguiente(){
    this.router.navigate(["/color-negro"]);
  }

}
