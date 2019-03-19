import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-color-rosado',
  templateUrl: './color-rosado.page.html',
  styleUrls: ['./color-rosado.page.scss'],
})
export class ColorRosadoPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/home"]);
  }

  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  anterior(){
    this.router.navigate(["/color-rojo"]);
  }

  siguiente(){
    this.router.navigate(["/color-verde"]);
  }

}
