import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-k',
  templateUrl: './k.page.html',
  styleUrls: ['./k.page.scss'],
})
export class KPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/home"]);
  }

  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  anterior(){
    this.router.navigate(["/j"]);
  }
  siguiente(){
    this.router.navigate(["/l"]);
  }

}
