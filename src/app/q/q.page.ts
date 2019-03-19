import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-q',
  templateUrl: './q.page.html',
  styleUrls: ['./q.page.scss'],
})
export class QPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/home"]);
  }

  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  anterior(){
    this.router.navigate(["/p"]);
  }
  siguiente(){
    this.router.navigate(["/r"]);
  }

}
