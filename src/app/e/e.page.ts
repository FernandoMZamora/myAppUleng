import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-e',
  templateUrl: './e.page.html',
  styleUrls: ['./e.page.scss'],
})
export class EPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/home"]);
  }

  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  anterior(){
    this.router.navigate(["/d"]);
  }

  siguiente(){
    this.router.navigate(["/f"]);
  }
}
