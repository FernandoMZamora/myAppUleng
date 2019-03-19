import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-b',
  templateUrl: './b.page.html',
  styleUrls: ['./b.page.scss'],
})
export class BPage{

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/home"]);
  }

  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  anterior(){
    this.router.navigate(["/a"]);
  }

  siguiente(){
    this.router.navigate(["/c"]);
  }
}
