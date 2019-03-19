import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-color-rojo',
  templateUrl: './color-rojo.page.html',
  styleUrls: ['./color-rojo.page.scss'],
})
export class ColorRojoPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/home"]);
  }

  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  anterior(){
    this.router.navigate(["/color-naranja"]);
  }

  siguiente(){
    this.router.navigate(["/color-rosado"]);
  }

}
