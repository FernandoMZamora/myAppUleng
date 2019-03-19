import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-d',
  templateUrl: './d.page.html',
  styleUrls: ['./d.page.scss'],
})
export class DPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/home"]);
  }

  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  anterior(){
    this.router.navigate(["/c"]);
  }

  siguiente(){
    this.router.navigate(["/e"]);
  }

}
