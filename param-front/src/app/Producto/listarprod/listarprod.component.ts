import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from '../../Service/producto.service';
import { Producto } from '../../Modelo/Producto';

@Component({
  selector: 'app-listarprod',
  templateUrl: './listarprod.component.html',
  styleUrls: ['./listarprod.component.css']
})

export class ListarprodComponent implements OnInit {
  producto: Producto[];
  lstEntidades: string[];
  lstProductos: string[];
  lstSubProductos: string[];
  entidadSelect: string;
  productoSelect: string;
  subProductoSelect: string;


  constructor(private service: ProductoService, private router: Router) { }

  ngOnInit() {
    console.log("Entra init");
    this.service.getProductos()
      .subscribe(data => {
        this.producto = data;
      });

    this.service.getLstEntidades()
      .subscribe(data => {
        this.lstEntidades = data;
      });

  }


  public onOptionsSelected(event) {

    console.log(this.entidadSelect.toString());

    this.service.getLstProductos(this.entidadSelect.toString())
      .subscribe(data => {
        this.lstProductos = data;
      });

  }

  public onOptionsSelectedProd(event) {

    console.log(this.productoSelect.toString());

    this.service.getLstSubProductos(this.entidadSelect.toString() + this.productoSelect.toString())
      .subscribe(data => {
        this.lstSubProductos = data;
      });

  }

  Buscar() {

    console.log('******Entra a Buscar****');

    let entidad = '0000';
    let prod = '00';
    let sub = '0000';
    let id = '';


    

    if (this.entidadSelect != undefined) {

      if (this.entidadSelect.length == 4) {
        entidad = this.entidadSelect.toString();
      }
    }

    if (this.productoSelect != undefined) {
      if (this.productoSelect.length == 2) {
        prod = this.productoSelect.toString();
      }
    }
    if (this.subProductoSelect != undefined) {
      if (this.subProductoSelect.length == 4) {
        sub = this.subProductoSelect.toString();
      }
    }

    id = entidad + prod + sub;
console.log('*****************************');
    console.log(id);

    this.service.getFindProductos(id.toString())
      .subscribe(data => {
        this.producto = data;
      });

  }

  Limpiar() {
    //ngOnInit;
  }


  Nuevoprod() {
    this.router.navigate(["addprod"]);
  }

  Consultaprod() {
    this.router.navigate(["addprod"]);
  }

  Editarprod(producto: Producto): void {
    localStorage.setItem("codent", producto.codent.toString());
    localStorage.setItem("producto", producto.producto.toString());
    localStorage.setItem("subprodu", producto.subprodu.toString());

    this.router.navigate(["editprod"]);
  }

  Borrarprod(producto: Producto) {
    localStorage.setItem("codent", producto.codent.toString());
    localStorage.setItem("producto", producto.producto.toString());
    localStorage.setItem("subprodu", producto.subprodu.toString());

    this.service.deleteProducto(producto.codent.toString(), producto.producto.toString(), producto.subprodu.toString())
      .subscribe(data => {
        this.producto = this.producto.filter(p => p !== producto);
        alert("Producto eliminado...");
      })
  }

}



