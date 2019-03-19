import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ani-gallo',
  templateUrl: './ani-gallo.page.html',
  styleUrls: ['./ani-gallo.page.scss'],
})
export class AniGalloPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/home"]);
  }

  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  anterior(){
    this.router.navigate(["/ani-gallina"]);
  }

  siguiente(){
    this.router.navigate(["/ani-gato"]);
  }

}
