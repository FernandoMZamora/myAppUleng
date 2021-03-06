import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-z',
  templateUrl: './z.page.html',
  styleUrls: ['./z.page.scss'],
})
export class ZPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/home"]);
  }

  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  anterior(){
    this.router.navigate(["/y"]);
  }

}
