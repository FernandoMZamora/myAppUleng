import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-j',
  templateUrl: './j.page.html',
  styleUrls: ['./j.page.scss'],
})
export class JPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/home"]);
  }

  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  anterior(){
    this.router.navigate(["/i"]);
  }
  siguiente(){
    this.router.navigate(["/k"]);
  }

}
