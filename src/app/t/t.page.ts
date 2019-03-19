import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-t',
  templateUrl: './t.page.html',
  styleUrls: ['./t.page.scss'],
})
export class TPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/home"]);
  }

  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  anterior(){
    this.router.navigate(["/s"]);
  }
  siguiente(){
    this.router.navigate(["/u"]);
  }

}
