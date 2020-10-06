import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/Service/producto.service';
import { ProductoSatService } from 'src/app/Service/producto-sat.service';
import { Producto } from 'src/app/Modelo/Producto';

@Component({
  selector: 'app-addprod',
  templateUrl: './addprod.component.html',
  styleUrls: ['./addprod.component.css']
})
export class AddprodComponent implements OnInit {

  producto: Producto = new Producto();
  lstEntidades : string[];
  lstProductos : string[];
  lstSubProductos : string[];
  entidadSelect : string;
  productoSelect : string;
  subProductoSelect : string;

  constructor(private router: Router, private service: ProductoService, private serviceSat: ProductoSatService) { }

  ngOnInit():void {

    this.serviceSat.getEntidadesSat()
    .subscribe(data => {
      this.lstEntidades = data;
    });

  } 

public onOptionsSelected(event) {

  console.log(this.entidadSelect.toString());

  this.service.getProductosSat(this.entidadSelect.toString())
  .subscribe(data => {
    this.lstProductos = data;
  });

}

public onOptionsSelectedProd(event) {

  console.log(this.productoSelect.toString());

  this.service.getSubProductosSat(this.entidadSelect.toString() + this.productoSelect.toString())
  .subscribe(data => {
    this.lstSubProductos = data;
  });

}

 Guardarprod() {

    console.log("Entra a guardar");

    let fechaHoy = new Date();
/*
    if (this.producto.codent.length<4){
      set: this.producto.codent = "0".repeat(4-this.producto.codent.length) + this.producto.codent;  
    }
*/

set: this.producto.codent = this.entidadSelect.toString();

set: this.producto.producto = this.productoSelect.toString();  

set: this.producto.subprodu = this.subProductoSelect.toString();  


    set: this.producto.desprodred = "A";
    set: this.producto.fecalta = fechaHoy;
    set: this.producto.indriesgo = "IN";

    set: this.producto.limcrectamin = 0;
    set: this.producto.limcrectamax = 0;
    set: this.producto.limcrecompmin = 0;
    set: this.producto.limcrecompmax = 0;

    set: this.producto.indgaran = "A";
    set: this.producto.indctadomcre = "A";
    set: this.producto.claseg = "A";
    set: this.producto.tipseg = "A";
    set: this.producto.fecini = fechaHoy;
    set: this.producto.fecfin = fechaHoy;
    set: this.producto.indctatip = "A";
    set: this.producto.impexclimtol = 0;
    set: this.producto.indexclim = "A";
    set: this.producto.indtrafeccad = "A";
    set: this.producto.aplicuota = "A";
    set: this.producto.trasalacr = "A";
    set: this.producto.numdiadevacr = 0;
    set: this.producto.trasaldis = "A";
    set: this.producto.indcuouso = 0;
    set: this.producto.nummesdemora = 0;
    set: this.producto.indpercuo = "A";
    set: this.producto.nummesmax = 0;
    set: this.producto.numdiaresol = 0;
    set: this.producto.indlimuni = "A";
    set: this.producto.numdiamasact = 0;
    set: this.producto.indlimiteu = "A";
    set: this.producto.porimpaga = 0;
    set: this.producto.impminmor = 0;
    set: this.producto.impminmin = 0;
    set: this.producto.portoltot = 0;
    set: this.producto.imptoltot = 0;
    set: this.producto.impmincomcuo = 0;
    set: this.producto.impmaxcomcuo = 0;
    set: this.producto.cuotamin = 0;
    set: this.producto.cuotamax = 0;
    set: this.producto.nummesmincuo = 0;
    set: this.producto.nummesmaxcuo = 0;
    set: this.producto.impmailing = 0;
    set: this.producto.codentumo = "A";
    set: this.producto.codofiumo = "A";
    set: this.producto.usuarioumo = "A";
    set: this.producto.codtermumo = "A";

    console.log(this.producto);


    this.service.createProducto(this.producto)
      .subscribe(data => {
        alert("Se Agrego con Exito...!!!");
        this.router.navigate(["listarprod"]);
      })
  }
}

