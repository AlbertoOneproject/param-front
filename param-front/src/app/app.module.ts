import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParmlistComponent } from './Parametros/parmlist/parmlist.component';
import { ParmeditComponent } from './Parametros/parmedit/parmedit.component';
import { ParmaddComponent } from './Parametros/parmadd/parmadd.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { ParametroService } from '../app/Service/parametro.service';
import { HttpClientModule } from '@angular/common/http';
import { ParmdelComponent } from './Parametros/parmdel/parmdel.component';


import { EditprodComponent } from './Producto/editprod/editprod.component';
import { AddprodComponent } from './Producto/addprod/addprod.component';
import { ListarprodComponent } from './Producto/listarprod/listarprod.component';
import { ProductoService } from './Service/producto.service';

import { Mpdt026Service} from '../app/Service/mpdt026.service';
import { Mpdt088Service} from '../app/Service/mpdt088.service';
import { AltaComponent } from '../app/Mpdt088/alta';
import { EditarComponent } from '../app/Mpdt088/editar';
import { ListarComponent } from '../app/Mpdt088/listar';
import { Listart026Component } from './Mpdt026/listart026/listart026.component';
import { Edit026Component } from './Mpdt026/edit026/edit026.component';
import { Addt026Component } from './Mpdt026/addt026/addt026.component';
import { AddtarjComponent } from './Tarjeta/addtarj/addtarj.component';
import { EdittarjComponent } from './Tarjeta/edittarj/edittarj.component';
import { ListartarjComponent } from './Tarjeta/listartarj/listartarj.component';

import { AgregarProductoComponent } from './ProductoSat/agregar-producto/agregar-producto.component';
import { EditarProductoComponent } from './ProductoSat/editar-producto/editar-producto.component';
import { ListarProductoComponent } from './ProductoSat/listar-producto/listar-producto.component';
import { ViewProductosComponent } from './ProductoSat/view-productos/view-productos.component';
import { ProductoSatService } from './Service/producto-sat.service';
import { TarjetaService } from './Service/tarjeta.service';
import { Add061Component } from './Mpdt061/add061/add061.component';
import { Edit061Component } from './Mpdt061/edit061/edit061.component';
import { Listar061Component } from './Mpdt061/listar061/listar061.component';

@NgModule({
  declarations: [
    AppComponent,
    ParmlistComponent,
    ParmeditComponent,
    ParmaddComponent,
    ParmdelComponent,
    ListarprodComponent,
    Listart026Component,
    Edit026Component,
    Addt026Component,
    AltaComponent,
    EditarComponent,
    ListarComponent,
    AddtarjComponent,
    EdittarjComponent,
    ListartarjComponent,
    
    ViewProductosComponent,    /*OMDA*/ 
    AgregarProductoComponent,  /*OMDA*/
    EditarProductoComponent,   /*OMDA*/
    ListarProductoComponent, AddprodComponent, EditprodComponent, Add061Component, Edit061Component, Listar061Component,   /*OMDA*/
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ParametroService, ProductoService, Mpdt026Service, Mpdt088Service,
              ProductoSatService,TarjetaService
   ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
