import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-num-dos',
  templateUrl: './num-dos.page.html',
  styleUrls: ['./num-dos.page.scss'],
})
export class NumDosPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/home"]);
  }

  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  anterior(){
    this.router.navigate(["/num-uno"]);
  }
  
  siguiente(){
    this.router.navigate(["/num-tres"]);
  }

}
