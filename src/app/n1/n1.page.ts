import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-n1',
  templateUrl: './n1.page.html',
  styleUrls: ['./n1.page.scss'],
})
export class N1Page {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/home"]);
  }

  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  anterior(){
    this.router.navigate(["/n"]);
  }
  siguiente(){
    this.router.navigate(["/o"]);
  }

}
