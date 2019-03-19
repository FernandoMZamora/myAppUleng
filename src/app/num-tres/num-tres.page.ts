import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-num-tres',
  templateUrl: './num-tres.page.html',
  styleUrls: ['./num-tres.page.scss'],
})
export class NumTresPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/home"]);
  }

  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  anterior(){
    this.router.navigate(["/num-dos"]);
  }

  siguiente(){
    this.router.navigate(["/num-cuatro"]);
  }

}
