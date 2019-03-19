import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-color-amarillo',
  templateUrl: './color-amarillo.page.html',
  styleUrls: ['./color-amarillo.page.scss'],
})
export class ColorAmarilloPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/home"]);
  }

  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  anterior(){
    this.router.navigate(["/color-negro"]);
  }

  siguiente(){
    this.router.navigate(["/color-azul"]);
  }

}
