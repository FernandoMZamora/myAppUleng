import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-color-azul',
  templateUrl: './color-azul.page.html',
  styleUrls: ['./color-azul.page.scss'],
})
export class ColorAzulPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/home"]);
  }

  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  anterior(){
    this.router.navigate(["/color-amarillo"]);
  }

  siguiente(){
    this.router.navigate(["/color-cafe"]);
  }

}
