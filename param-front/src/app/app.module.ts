import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParmlistComponent } from './Parametros/parmlist/parmlist.component';
import { ParmeditComponent } from './Parametros/parmedit/parmedit.component';
import { ParmaddComponent } from './Parametros/parmadd/parmadd.component';
import { FormsModule } from '@angular/forms';
import { ParametroService } from '../app/Service/parametro.service';
import { HttpClientModule } from '@angular/common/http';
import { ParmdelComponent } from './Parametros/parmdel/parmdel.component';

import { ListarprodComponent } from './Producto/listarprod/listarprod.component';
import { ProductoService } from './Service/producto.service';
import { Mpdt026Service} from '../app/Service/mpdt026.service';
import { Mpdt088Service} from '../app/Service/mpdt088.service';
import { AltaComponent } from '../app/Mpdt088/alta';
import { Listar026Component } from './Mpdt026/listart026/listart026.component';
import { Edit026Component } from './Mpdt026/edit026/edit026.component';
import { Addt026Component } from './Mpdt026/addt026/addt026.component';
import { AddtarjComponent } from './Tarjeta/addtarj/addtarj.component';
import { EdittarjComponent } from './Tarjeta/edittarj/edittarj.component';
import { ListartarjComponent } from './Tarjeta/listartarj/listartarj.component';

@NgModule({
  declarations: [
    AppComponent,
    ParmlistComponent,
    ParmeditComponent,
    ParmaddComponent,
    ParmdelComponent,
    ListarprodComponent,
    Listar026Component,
    Edit026Component,
    Addt026Component,
    AltaComponent,
    AddtarjComponent,
    EdittarjComponent,
    ListartarjComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ParametroService, ProductoService, Mpdt026Service, Mpdt088Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
