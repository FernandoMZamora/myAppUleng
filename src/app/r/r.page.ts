import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-r',
  templateUrl: './r.page.html',
  styleUrls: ['./r.page.scss'],
})
export class RPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/home"]);
  }

  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  anterior(){
    this.router.navigate(["/q"]);
  }
  siguiente(){
    this.router.navigate(["/s"]);
  }

}
