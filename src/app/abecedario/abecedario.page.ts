import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-abecedario',
  templateUrl: './abecedario.page.html',
  styleUrls: ['./abecedario.page.scss'],
})
export class AbecedarioPage {

  constructor(private router: Router) { }
  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  home(){
    this.router.navigate(["/home"]);
  }

}
