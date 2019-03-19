import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-f',
  templateUrl: './f.page.html',
  styleUrls: ['./f.page.scss'],
})
export class FPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/home"]);
  }

  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  anterior(){
    this.router.navigate(["/e"]);
  }

  siguiente(){
    this.router.navigate(["/g"]);
  }

}
