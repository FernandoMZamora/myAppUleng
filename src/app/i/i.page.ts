import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-i',
  templateUrl: './i.page.html',
  styleUrls: ['./i.page.scss'],
})
export class IPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/home"]);
  }

  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  anterior(){
    this.router.navigate(["/h"]);
  }
  siguiente(){
    this.router.navigate(["/j"]);
  }

}
