import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-color-negro',
  templateUrl: './color-negro.page.html',
  styleUrls: ['./color-negro.page.scss'],
})
export class ColorNegroPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/home"]);
  }

  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  anterior(){
    this.router.navigate(["/color-blanco"]);
  }

  siguiente(){
    this.router.navigate(["/color-amarillo"]);
  }

}
