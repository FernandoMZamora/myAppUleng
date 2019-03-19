import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-num-cuatro',
  templateUrl: './num-cuatro.page.html',
  styleUrls: ['./num-cuatro.page.scss'],
})
export class NumCuatroPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/home"]);
  }

  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  anterior(){
    this.router.navigate(["/num-tres"]);
  }

  siguiente(){
    this.router.navigate(["/num-cinco"]);
  }

}
