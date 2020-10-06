import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/Service/producto.service';
import { Producto } from 'src/app/Modelo/Producto';

@Component({
  selector: 'app-editprod',
  templateUrl: './editprod.component.html',
  styleUrls: ['./editprod.component.css']
})

export class EditprodComponent implements OnInit {

  producto :Producto =new Producto();
  constructor(private router:Router,private service:ProductoService) { }

  ngOnInit() {
    this.Editarprod();
  }

  Editarprod(){
    let codent=localStorage.getItem("codent");
    let producto=localStorage.getItem("producto");
    let subprodu=localStorage.getItem("subprodu");
    this.service.getProductoId(codent, producto, subprodu )
    .subscribe(data=>{
      this.producto=data;
    })

  }

  Actualizarprod(tarjeta:Producto){
    this.service.updateProducto(tarjeta)
    .subscribe(data=>{
      this.producto=data;
      alert("Se Actualizo con Exito...!!!");
      this.router.navigate(["listarprod"]);
    })
  }

}
