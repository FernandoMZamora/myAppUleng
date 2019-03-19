import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-num-cinco',
  templateUrl: './num-cinco.page.html',
  styleUrls: ['./num-cinco.page.scss'],
})
export class NumCincoPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/home"]);
  }

  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  anterior(){
    this.router.navigate(["/num-cuatro"]);
  }

  siguiente(){
    this.router.navigate(["/num-seis"]);
  }

}
