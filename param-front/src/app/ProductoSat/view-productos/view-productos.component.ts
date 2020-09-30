import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoSatService } from 'src/app/Service/producto-sat.service';
import { ProductoSat } from 'src/app/Modelo/ProductoSat'

@Component({
  selector: 'app-view-productos',
  templateUrl: './view-productos.component.html',
  styleUrls: ['./view-productos.component.css']
})
export class ViewProductosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.listProductoSat();
  }

  addProductoSat(){
    //alert('view-productos -> listProductoSat');
    this.router.navigate(["viewProductos/addProductoSat"]);
  }

  listProductoSat() {
    console.log('app.component -> listProductoSat');
    //alert('view-productos -> listProductoSat');
    this.router.navigate(["viewProductos/listProductoSat"]);
    
  }

}
