import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-m',
  templateUrl: './m.page.html',
  styleUrls: ['./m.page.scss'],
})
export class MPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/home"]);
  }

  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  anterior(){
    this.router.navigate(["/l"]);
  }
  siguiente(){
    this.router.navigate(["/n"]);
  }

}
