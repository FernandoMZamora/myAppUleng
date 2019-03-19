import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-color-verde',
  templateUrl: './color-verde.page.html',
  styleUrls: ['./color-verde.page.scss'],
})
export class ColorVerdePage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/home"]);
  }

  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  anterior(){
    this.router.navigate(["/color-rosado"]);
  }

}
