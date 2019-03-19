import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-y',
  templateUrl: './y.page.html',
  styleUrls: ['./y.page.scss'],
})
export class YPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/home"]);
  }

  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  anterior(){
    this.router.navigate(["/x"]);
  }
  siguiente(){
    this.router.navigate(["/z"]);
  }

}
