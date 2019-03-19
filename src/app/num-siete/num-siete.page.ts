import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-num-siete',
  templateUrl: './num-siete.page.html',
  styleUrls: ['./num-siete.page.scss'],
})
export class NumSietePage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/home"]);
  }

  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  anterior(){
    this.router.navigate(["/num-seis"]);
  }

  siguiente(){
    this.router.navigate(["/num-ocho"]);
  }

}
