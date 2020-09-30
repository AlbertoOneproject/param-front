import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductoSat } from 'src/app/Modelo/ProductoSat';
import { ProductoSatService } from 'src/app/Service/producto-sat.service';

@Component({
  selector: 'app-agregar-producto.component',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
//export class AgregarProductoComponent implements OnInit, OnDestroy {
export class AgregarProductoComponent implements OnInit {

  productoSat : ProductoSat =  new ProductoSat();
  //suscription : Subscription;

  constructor(private router: Router, private service: ProductoSatService) { }

  ngOnInit(): void {
  }

  /*
  ngOnDestroy(){
    this.suscription.unsubscribe();
  }
  */

  saveProductoSat(){
    //set: this.productoSat.codNrbeEnt = "0166";
    
    this.service.postProductoSat(this.productoSat)
    .subscribe(data => {
      //alert("Registro agregado exitosamente!");
      this.router.navigate(["viewProductos/listProductoSat"]);
    })
  }


}
