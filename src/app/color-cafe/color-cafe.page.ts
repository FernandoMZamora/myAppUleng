import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-color-cafe',
  templateUrl: './color-cafe.page.html',
  styleUrls: ['./color-cafe.page.scss'],
})
export class ColorCafePage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/home"]);
  }

  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  anterior(){
    this.router.navigate(["/color-azul"]);
  }

  siguiente(){
    this.router.navigate(["/color-celeste"]);
  }

}
