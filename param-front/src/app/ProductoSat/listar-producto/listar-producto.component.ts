import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoSatService } from 'src/app/Service/producto-sat.service';
import { ProductoSat } from 'src/app/Modelo/ProductoSat'
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-listar-producto.component',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
//export class ListarProductoComponent implements OnInit, OnDestroy {
export class ListarProductoComponent implements OnInit {  
  productosSat : ProductoSat[];
  lstEntidades : string[];
  entidadSelect : string;
  
  constructor(private service: ProductoSatService, private router: Router, private route: ActivatedRoute) { }
  
  //suscription : Subscription;

  ngOnInit(): void {
    this.service.getProductoSat().subscribe(data => {
      this.productosSat = data;
      console.log(data.toString());
    });

    this.service.getEntidadesSat()
      .subscribe(data => {
        this.lstEntidades = data;
      });
  
    
      //alert(JSON.stringify(data).toString());
    
  }

 /*  ngOnDestroy(){
    this.suscription.unsubscribe();
  } */

  editProductoSat(productoSat: ProductoSat): void {
    localStorage.setItem("codNrbeEnt", productoSat.codNrbeEnt.toString());
    localStorage.setItem("idPrdSat", productoSat.idPrdSat.toString());
    localStorage.setItem("idSPrdSat", productoSat.idSPrdSat.toString());
    localStorage.setItem("codLinea", productoSat.codLinea.toString());

    localStorage.setItem("modoBtn", "Modificacion");
    
    this.router.navigate(["viewProductos/editProductoSat"])
  }

  deleteProductoSat(productoSat: ProductoSat): void {
    localStorage.setItem("codNrbeEnt", productoSat.codNrbeEnt.toString());
    localStorage.setItem("idPrdSat", productoSat.idPrdSat.toString());
    localStorage.setItem("idSPrdSat", productoSat.idSPrdSat.toString());
    localStorage.setItem("codLinea", productoSat.codLinea.toString());

    this.service.delProductoSat(productoSat.codNrbeEnt.toString(),
      productoSat.idPrdSat.toString(),
      productoSat.idSPrdSat.toString(),
      productoSat.codLinea.toString() )
      .subscribe(data => {
        this.productosSat = this.productosSat.filter(p => p !== productoSat);
        alert("Registro eliminado ...");
      })
  }

  listProductosEntidad(codNrbeEnt : String ): void {
    this.service.getProductosEntidad(codNrbeEnt).subscribe(data => {
        this.productosSat = data;
    });
  }

  
}
