import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-l',
  templateUrl: './l.page.html',
  styleUrls: ['./l.page.scss'],
})
export class LPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/home"]);
  }

  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  anterior(){
    this.router.navigate(["/k"]);
  }
  siguiente(){
    this.router.navigate(["/m"]);
  }

}
