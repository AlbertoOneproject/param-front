import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoSatService } from 'src/app/Service/producto-sat.service';
import { ProductoSat } from 'src/app/Modelo/ProductoSat';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-editar-producto.component',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
//export class EditarProductoComponent implements OnInit, OnDestroy {
export class EditarProductoComponent implements OnInit {
 // suscription : Subscription
  productoSat :  ProductoSat =  new ProductoSat();
  constructor(private router: Router, private service: ProductoSatService) { }

  ngOnInit(): void {
    //alert('edit-producto.component -> OnInit()');
    this.editProductoSat();
  }

  //ngOnDestroy(){
  //  this.suscription.unsubscribe();
 // }

  editProductoSat(){
    //alert('edit-producto.component -> editProductoSat()');
    let codNrbeEnt = localStorage.getItem("codNrbeEnt");
    let idPrdSat = localStorage.getItem("idPrdSat");
    let idSPrdSat = localStorage.getItem("idSPrdSat"); 
    let codLinea = localStorage.getItem("codLinea");
    
    //this.suscription = 
    this.service.getProductoSatId(codNrbeEnt, idPrdSat, idSPrdSat,codLinea)
      .subscribe(data => {
        this.productoSat = data;
      });
  }

  updateProductoSat(productoSat : ProductoSat) {
    //alert('Actualiza JSON: ' + JSON.stringify(productoSat) );
    this.service.putProductoSat(productoSat)
    .subscribe((data) => {
      alert('Registro modificado exitosamente');
      this.router.navigate(["viewProductos/listProductoSat"]);
    })
  }

}
