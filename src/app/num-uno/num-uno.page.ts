import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-num-uno',
  templateUrl: './num-uno.page.html',
  styleUrls: ['./num-uno.page.scss'],
})
export class NumUnoPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/home"]);
  }

  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  anterior(){
    this.router.navigate(["/num-cero"]);
  }
  siguiente(){
    this.router.navigate(["/num-dos"]);
  }

}
