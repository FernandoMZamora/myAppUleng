import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-s',
  templateUrl: './s.page.html',
  styleUrls: ['./s.page.scss'],
})
export class SPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/home"]);
  }

  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  anterior(){
    this.router.navigate(["/r"]);
  }
  siguiente(){
    this.router.navigate(["/t"]);
  }

}
