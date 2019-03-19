import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-w',
  templateUrl: './w.page.html',
  styleUrls: ['./w.page.scss'],
})
export class WPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/home"]);
  }

  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  anterior(){
    this.router.navigate(["/v"]);
  }
  siguiente(){
    this.router.navigate(["/x"]);
  }

}
