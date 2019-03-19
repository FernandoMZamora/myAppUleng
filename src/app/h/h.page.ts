import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-h',
  templateUrl: './h.page.html',
  styleUrls: ['./h.page.scss'],
})
export class HPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/home"]);
  }

  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  anterior(){
    this.router.navigate(["/g"]);
  }
  siguiente(){
    this.router.navigate(["/i"]);
  }

}
