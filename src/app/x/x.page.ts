import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-x',
  templateUrl: './x.page.html',
  styleUrls: ['./x.page.scss'],
})
export class XPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/home"]);
  }

  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  anterior(){
    this.router.navigate(["/w"]);
  }
  siguiente(){
    this.router.navigate(["/y"]);
  }

}
