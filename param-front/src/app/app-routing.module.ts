import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ParmlistComponent } from './Parametros/parmlist/parmlist.component';
import {ParmaddComponent } from './Parametros/parmadd/parmadd.component';
import {ParmeditComponent } from './Parametros/parmedit/parmedit.component';

import { ListarprodComponent } from './Producto/listarprod/listarprod.component';
import { AddprodComponent } from './Producto/addprod/addprod.component';
import { EditprodComponent } from './Producto/editprod/editprod.component';


import {Listart026Component} from './Mpdt026/listart026/listart026.component';
import {Addt026Component} from './Mpdt026/addt026/addt026.component';
import {Edit026Component} from './Mpdt026/edit026/edit026.component';

import {Listar061Component} from './Mpdt061/listar061/listar061.component';
import {Add061Component} from './Mpdt061/add061/add061.component';
import {Edit061Component} from './Mpdt061/edit061/edit061.component';

import { ListartarjComponent } from './Tarjeta/listartarj/listartarj.component';
import { AddtarjComponent } from './Tarjeta/addtarj/addtarj.component';
import { EdittarjComponent } from './Tarjeta/edittarj/edittarj.component';

import { ViewProductosComponent } from './ProductoSat/view-productos/view-productos.component';
import { ListarProductoComponent } from './ProductoSat/listar-producto/listar-producto.component';
import { EditarProductoComponent } from './ProductoSat/editar-producto/editar-producto.component';
import { AgregarProductoComponent } from './ProductoSat/agregar-producto/agregar-producto.component';

import { ListarComponent } from './Mpdt088/listar/listar.component';
import { AltaComponent } from './Mpdt088/alta/alta.component';
import { EditarComponent } from './Mpdt088/editar/editar.component';

const routes: Routes = [
  {path:'listarparm', component:ParmlistComponent},
  {path:'addparm',component:ParmaddComponent},
  {path:'editparm',component:ParmeditComponent},

  {path:'listarprod', component:ListarprodComponent},
  {path:'addprod',component:AddprodComponent},
  {path:'editprod',component:EditprodComponent},

  {path:'lista026',component:Listart026Component},
  {path:'addt026',component:Addt026Component},
  {path:'edit026',component:Edit026Component},

  {path:'listartarj', component:ListartarjComponent},
  {path:'addtarj',component:AddtarjComponent},
  {path:'edittarj',component:EdittarjComponent},

  {path:'lista061',component:Listar061Component},
  {path:'add061',component:Add061Component},
  {path:'edit061',component:Edit061Component},

  {path:'listar',component:ListarComponent},
  {path:'alta',component:AltaComponent},
  {path:'editar',component:EditarComponent},


  {path: 
    'viewProductos', 
    component: ViewProductosComponent,
    children :[{ 
                path: 'listProductoSat', 
                component: ListarProductoComponent,
              }, 
              { 
                path: 'editProductoSat', 
                component: EditarProductoComponent,
              }, 
              { 
                path: 'addProductoSat', 
                component: AgregarProductoComponent,
              }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
