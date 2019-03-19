import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-num-ocho',
  templateUrl: './num-ocho.page.html',
  styleUrls: ['./num-ocho.page.scss'],
})
export class NumOchoPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/home"]);
  }

  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  anterior(){
    this.router.navigate(["/num-siete"]);
  }

  siguiente(){
    this.router.navigate(["/num-nueve"]);
  }

}
