import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-u',
  templateUrl: './u.page.html',
  styleUrls: ['./u.page.scss'],
})
export class UPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/home"]);
  }

  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  anterior(){
    this.router.navigate(["/t"]);
  }
  siguiente(){
    this.router.navigate(["/v"]);
  }

}
