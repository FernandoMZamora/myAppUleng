import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ani-gato',
  templateUrl: './ani-gato.page.html',
  styleUrls: ['./ani-gato.page.scss'],
})
export class AniGatoPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/home"]);
  }

  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  anterior(){
    this.router.navigate(["/ani-gallo"]);
  }

  siguiente(){
    this.router.navigate(["/ani-mono"]);
  }

}
