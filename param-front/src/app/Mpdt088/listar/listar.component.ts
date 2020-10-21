import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mpdt088Service } from '../../Service/mpdt088.service';
import { Mpdt088 } from 'src/app/Modelo/mpdt088.model';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  mpdt088s: Mpdt088[];
  

  constructor(private service: Mpdt088Service, private router: Router) { }

  ngOnInit() {   
   this.consultar();
  }

  //consulta
  consultar() {
    this.service.getMpdt088().subscribe(data => {
      this.mpdt088s = data;
      console.log(data);
    });

  }



  editarMpdt088(mpdt088: Mpdt088): void {
    localStorage.setItem("codent", mpdt088.codent.toString());
    localStorage.setItem("producto", mpdt088.producto.toString());
    localStorage.setItem("subprodu", mpdt088.subprodu.toString());

    this.router.navigate(["editar"]);
  }

  deleteMpdt088(mpdt088: Mpdt088) {
    localStorage.setItem("codent", mpdt088.codent.toString());
    localStorage.setItem("producto", mpdt088.producto.toString());
    localStorage.setItem("subprodu", mpdt088.subprodu.toString());
    this.service.deleteMpdt088(
      mpdt088.codent.toString(),
      mpdt088.producto.toString(),
      mpdt088.subprodu.toString())

      .subscribe(data => {
        this.mpdt088s = this.mpdt088s.filter(p => p !== mpdt088);
        alert("Parametro Eliminado")
        this.consultar();
      })
  }

}

