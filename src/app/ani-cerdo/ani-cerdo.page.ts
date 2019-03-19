import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ani-cerdo',
  templateUrl: './ani-cerdo.page.html',
  styleUrls: ['./ani-cerdo.page.scss'],
})
export class AniCerdoPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/home"]);
  }

  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  anterior(){
    this.router.navigate(["/ani-caballo"]);
  }

  siguiente(){
    this.router.navigate(["/ani-conejo"]);
  }

}
