import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-p',
  templateUrl: './p.page.html',
  styleUrls: ['./p.page.scss'],
})
export class PPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/home"]);
  }

  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  anterior(){
    this.router.navigate(["/o"]);
  }
  siguiente(){
    this.router.navigate(["/q"]);
  }

}
