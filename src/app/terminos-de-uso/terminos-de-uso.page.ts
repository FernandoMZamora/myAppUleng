import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terminos-de-uso',
  templateUrl: './terminos-de-uso.page.html',
  styleUrls: ['./terminos-de-uso.page.scss'],
})
export class TerminosDeUsoPage {

  constructor(private router: Router) { }
  
  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  home(){
    this.router.navigate(["/home"]);
  }

}
