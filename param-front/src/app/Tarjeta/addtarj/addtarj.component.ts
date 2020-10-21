import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TarjetaService } from '../../Service/tarjeta.service';
import { Tarjeta } from 'src/app/Modelo/Tarjeta';

@Component({
  selector: 'app-addtarj',
  templateUrl: './addtarj.component.html',
  styleUrls: ['./addtarj.component.css']
})
export class AddtarjComponent implements OnInit {
  tarjeta:Tarjeta = new Tarjeta();

  lstEntidades   : string[];
  entidadSelect  : string;
  lstMarcas      : string[];
  marcaSelect    : number;
  lstITipTarj    : string[];
  iTipTarjSelect : number;
  lstBinProc     : string[];
  binProcSelect  : string;
  lstRangSup     : string[];
  rangSupSelect  : string;
  lstRangInf     : string[];
  rangInfSelect  : string;
  

  constructor(private service:TarjetaService,private router:Router) { }

//  ngOnInit() {
//  }

  ngOnInit(): void {
    this.service.getEntidades()
      .subscribe(data => {
        this.lstEntidades = data;
      });
 //  this.service.getMarcas()
 //     .subscribe(data => {
 //       this.lstMarcas = data;
 //     });
 //
 //     this.service.getITipTarj()
 //     .subscribe(data => {
 //       this.lstITipTarj = data;
 //     });
//
      this.service.getBinProc()
      .subscribe(data => {
        this.lstBinProc = data;
      });

//      this.service.getRangSup()
//      .subscribe(data => {
//        this.lstRangSup = data;
//      });

//      this.service.getRangInf()
//      .subscribe(data => {
//        this.lstRangInf = data;
//      });

  }

  public onOptionsSelected(event) {

    console.log(this.entidadSelect.toString());
  
    this.service.getMarcas(this.entidadSelect.toString())
    .subscribe(data => {
      this.lstMarcas = data;
    });
  }


  public onOptionsSelectedMarca(event) {
    console.log(this.entidadSelect.toString());
    console.log(this.marcaSelect.toString());
  
    this.service.getITipTarj(this.entidadSelect.toString(),this.marcaSelect.toString())
    .subscribe(data => {
      this.lstITipTarj = data;
    });
  }
         
  public onOptionsSelectedBinproc(event) {

    console.log(this.binProcSelect.toString());
  
    this.service.getRangSup(this.binProcSelect.toString())
    .subscribe(data => {
      this.lstRangSup = data;
    });
  }

       
  public onOptionsSelectedRangoS(event) {

    console.log(this.rangSupSelect.toString());
  
    this.service.getRangInf(this.binProcSelect.toString(),this.rangSupSelect.toString())
    .subscribe(data => {
      this.lstRangInf = data;
    });
  }




  Guardartarj(){
    set: this.tarjeta.codent = this.entidadSelect;
    set: this.tarjeta.codmar = this.marcaSelect;
    set: this.tarjeta.indtipt = this.iTipTarjSelect;
    
    set: this.tarjeta.binproc = this.binProcSelect;
    set: this.tarjeta.rangosup = this.rangSupSelect;
    set: this.tarjeta.rangoinf = this.rangInfSelect;

    set: this.tarjeta.codentumo = "CODE";
    set: this.tarjeta.codofiumo = "CODO";
    set: this.tarjeta.usuarioumo = "ANGUMP26";
    set: this.tarjeta.codtermumo = "TERMUMO";
    set: this.tarjeta.contcur =  null;
    this.service.createTarjeta(this.tarjeta)
    .subscribe(data=>{
      alert("Se Agrego con Exito...!!!");
      this.router.navigate(["listartarj"]);
    })
  }

}
