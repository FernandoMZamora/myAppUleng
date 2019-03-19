import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-n',
  templateUrl: './n.page.html',
  styleUrls: ['./n.page.scss'],
})
export class NPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/home"]);
  }

  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  anterior(){
    this.router.navigate(["/m"]);
  }
  
  siguiente(){
    this.router.navigate(["/n1"]);
  }

}
