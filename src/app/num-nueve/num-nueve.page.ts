import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-num-nueve',
  templateUrl: './num-nueve.page.html',
  styleUrls: ['./num-nueve.page.scss'],
})
export class NumNuevePage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/home"]);
  }

  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  anterior(){
    this.router.navigate(["/num-ocho"]);
  }

  siguiente(){
    this.router.navigate(["/num-diez"]);
  }

}
