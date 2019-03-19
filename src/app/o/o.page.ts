import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-o',
  templateUrl: './o.page.html',
  styleUrls: ['./o.page.scss'],
})
export class OPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/home"]);
  }

  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  anterior(){
    this.router.navigate(["/n1"]);
  }
  siguiente(){
    this.router.navigate(["/p"]);
  }

}
