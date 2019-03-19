import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ani-perro',
  templateUrl: './ani-perro.page.html',
  styleUrls: ['./ani-perro.page.scss'],
})
export class AniPerroPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/home"]);
  }

  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  anterior(){
    this.router.navigate(["/ani-mono"]);
  }

  siguiente(){
    this.router.navigate(["/ani-vaca"]);
  }

}
