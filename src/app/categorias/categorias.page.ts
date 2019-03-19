import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage {

  constructor (private router: Router) {}
  ir_abecedario(){
  this.router.navigate(["/abecedario"]);
  }

  ir_numeros(){
    this.router.navigate(["/numeros"]);
  }
  
  ir_animales(){
      this.router.navigate(["/animales"]);
  }

  ir_colores(){
    this.router.navigate(["/colores"]);
  }

  home(){
    this.router.navigate(["/home"]);
  }

  ir_sobreNosotros(){
    this.router.navigate(["/sobre-nosotros"]);
  }

  ir_terminosDeUso(){
    this.router.navigate(["/terminos-de-uso"]);
  }

  ir_instrucciones(){
    this.router.navigate(["/instrucciones"]);
  }


}
