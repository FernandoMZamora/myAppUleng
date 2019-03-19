import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ani-conejo',
  templateUrl: './ani-conejo.page.html',
  styleUrls: ['./ani-conejo.page.scss'],
})
export class AniConejoPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/home"]);
  }

  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  anterior(){
    this.router.navigate(["/ani-cerdo"]);
  }

  siguiente(){
    this.router.navigate(["/ani-gallina"]);
  }

}
