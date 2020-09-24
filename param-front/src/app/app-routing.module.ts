import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ParmlistComponent } from './Parametros/parmlist/parmlist.component';
import {ParmaddComponent } from './Parametros/parmadd/parmadd.component';
import {ParmeditComponent } from './Parametros/parmedit/parmedit.component';

import { ListarprodComponent } from './Producto/listarprod/listarprod.component';

import {Listar026Component} from './Mpdt026/listart026/listart026.component';
import {Addt026Component} from './Mpdt026/addt026/addt026.component';
import {Edit026Component} from './Mpdt026/edit026/edit026.component';

import { ListartarjComponent } from './Tarjeta/listartarj/listartarj.component';
import { AddtarjComponent } from './Tarjeta/addtarj/addtarj.component';
import { EdittarjComponent } from './Tarjeta/edittarj/edittarj.component';

const routes: Routes = [
  {path:'listarparm', component:ParmlistComponent},
  {path:'addparm',component:ParmaddComponent},
  {path:'editparm',component:ParmeditComponent},

  {path:'listarprod', component:ListarprodComponent},

  {path:'lista026',component:Listar026Component},
  {path:'addt026',component:Addt026Component},
  {path:'edit026',component:Edit026Component},

  {path:'listartarj', component:ListartarjComponent},
  {path:'addtarj',component:AddtarjComponent},
  {path:'edittarj',component:EdittarjComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
