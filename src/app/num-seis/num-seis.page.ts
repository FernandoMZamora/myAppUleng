import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-num-seis',
  templateUrl: './num-seis.page.html',
  styleUrls: ['./num-seis.page.scss'],
})
export class NumSeisPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/home"]);
  }

  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  anterior(){
    this.router.navigate(["/num-cinco"]);
  }

  siguiente(){
    this.router.navigate(["/num-siete"]);
  }

}
