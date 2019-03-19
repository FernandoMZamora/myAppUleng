import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-g',
  templateUrl: './g.page.html',
  styleUrls: ['./g.page.scss'],
})
export class GPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/home"]);
  }

  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  anterior(){
    this.router.navigate(["/f"]);
  }
  siguiente(){
    this.router.navigate(["/h"]);
  }

}
