import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-num-diez',
  templateUrl: './num-diez.page.html',
  styleUrls: ['./num-diez.page.scss'],
})
export class NumDiezPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/home"]);
  }

  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  anterior(){
    this.router.navigate(["/num-nueve"]);
  }

}
