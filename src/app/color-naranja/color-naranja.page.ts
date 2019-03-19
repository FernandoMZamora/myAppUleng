import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-color-naranja',
  templateUrl: './color-naranja.page.html',
  styleUrls: ['./color-naranja.page.scss'],
})
export class ColorNaranjaPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/home"]);
  }

  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  anterior(){
    this.router.navigate(["/color-celeste"]);
  }

  siguiente(){
    this.router.navigate(["/color-rojo"]);
  }

}
