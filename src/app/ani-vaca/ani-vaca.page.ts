import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ani-vaca',
  templateUrl: './ani-vaca.page.html',
  styleUrls: ['./ani-vaca.page.scss'],
})
export class AniVacaPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/home"]);
  }

  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  anterior(){
    this.router.navigate(["/ani-perro"]);
  }

}
