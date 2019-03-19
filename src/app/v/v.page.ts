import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-v',
  templateUrl: './v.page.html',
  styleUrls: ['./v.page.scss'],
})
export class VPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/home"]);
  }

  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  anterior(){
    this.router.navigate(["/u"]);
  }
  siguiente(){
    this.router.navigate(["/w"]);
  }

}
