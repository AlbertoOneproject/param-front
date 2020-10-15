import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { Mpdt088 } from '../../Modelo/mpdt088.model';
import { Mpdt088Service } from '../../Service/mpdt088.service';
import { Router } from '@angular/router';
import { ProductoService } from '../../Service/producto.service';
import { TarjetaService } from '../../Service/tarjeta.service';
import { timer } from 'rxjs';



@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent implements OnInit {
  mpdt088: Mpdt088 = new Mpdt088();
  lstEntidades: string[];
  lstProductos: string[];
  lstSubProductos: string[];
  lstMarcas: string[];
  lstTpoTarjeta: string[];
  entidadSelect : string;
  productoSelect : string;
  subProductoSelect : string;
  marcasSelect: string;
  tpoTarSelect: string;
  entidad: string;

  constructor(private formBuilder: FormBuilder,
    private service: Mpdt088Service, 
    private router: Router,
    private serviceProducto: ProductoService,
    private serviceTarjeta: TarjetaService) { }

  ngOnInit(): void {

    this.serviceProducto.getLstEntidades()
    .subscribe(data => {

      this.lstEntidades = data;
    });

  }


  addMpdt088(){
    

    set: this.mpdt088.codent = this.entidadSelect.toString();
    set: this.mpdt088.producto = this.productoSelect.toString();      
    set: this.mpdt088.subprodu = this.subProductoSelect.toString(); 
    set: this.mpdt088.codmar = Number(this.marcasSelect.toString()); 
    set: this.mpdt088.indtipt = Number(this.subProductoSelect.toString()); 
    set: this.mpdt088.fecalta = "2020-02-14"; 
    set: this.mpdt088.fecbaja = "2020-02-14"; 
    set: this.mpdt088.limcremes = 0.00; 
    set: this.mpdt088.limdebmes = 0.00; 
    set: this.mpdt088.maxoper =3; 
    set: this.mpdt088.limcredia = 0.00; 
    set: this.mpdt088.limdebdia = 0.00; 
    set: this.mpdt088.limdiacaj = 0.00; 
    set: this.mpdt088.maxopecaj = 7; 
    set: this.mpdt088.maxodia = 8; 
    set: this.mpdt088.salmaxmon = 0.00; 
    set: this.mpdt088.cargamax = 0.00; 
    set: this.mpdt088.consumax = 0.00; 
    set: this.mpdt088.indacpalt = "Y"; 
    set: this.mpdt088.indacpren = "Z"; 
    set: this.mpdt088.vigtar = 12; 
    set: this.mpdt088.vigtarren = 13; 
    set: this.mpdt088.codentumo = "aaaa"; 
    set: this.mpdt088.codofiumo = "bbbb"; 
    set: this.mpdt088.usuarioumo = "cccc";
    set: this.mpdt088.codtermumo = "dddd";
    set: this.mpdt088.contcur = "2020-02-17 18:00:34";  

 
    this.service.createMpdt088(this.mpdt088)
    .subscribe(data=>{
      alert("Se Agrego con Exito...!!!");
      this.router.navigate(["listar"]);

    })
  }

  public onOptionsSelected(event) {
  
    this.entidad = this.entidadSelect.toString();
    this.serviceProducto.getProductosSat(this.entidadSelect.toString())
    .subscribe(data => {
      this.lstProductos = data;
    });

  // this.buscarMarca(this.entidad);
  
  }

  public onOptionsSelectedProd(event) {

    this.subProductoSelect = "";

    this.serviceProducto.getLstSubProductos(this.entidadSelect.toString() + this.productoSelect.toString())
      .subscribe(data => {
        this.lstSubProductos = data;
      });

  }

  public onOptionsSelectedMarca(event) {

    this.serviceTarjeta.getMarcas(this.entidad)
    .subscribe(data => {
      this.lstMarcas = data;
  })
  }

  public onOptionsSelectedTpoTarjeta(event) {

    this.serviceTarjeta.getITipTarj(this.entidad.toString(), this.marcasSelect.toString())
    .subscribe(data => {
      this.lstTpoTarjeta = data;
  })
  }

}
