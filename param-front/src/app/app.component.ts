import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'satmenu';
  constructor(private router:Router){}

  Listarparametro(){
    this.router.navigate(["listarparm"]);
  }
  Nuevoparametro(){
    this.router.navigate(["addparm"]);
  }

  Listarproducto() {
    this.router.navigate(["listarprod"]);
  }

  Nuevo026(){
    this.router.navigate(["addt026"])
  }

  Listar026Component(){
    this.router.navigate(["lista026"]);
  }

  viewProductos() {
    this.router.navigate(["viewProductos"]);
  }

  listartarj() {
    this.router.navigate(["listartarj"]);
  }
}
