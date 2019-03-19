import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-color-celeste',
  templateUrl: './color-celeste.page.html',
  styleUrls: ['./color-celeste.page.scss'],
})
export class ColorCelestePage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/home"]);
  }

  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  anterior(){
    this.router.navigate(["/color-cafe"]);
  }

  siguiente(){
    this.router.navigate(["/color-naranja"]);
  }

}
