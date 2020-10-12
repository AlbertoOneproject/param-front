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
  constructor(private service:TarjetaService,private router:Router) { }

//  ngOnInit() {
//  }

  ngOnInit(): void {
    this.service.getEntidades()
      .subscribe(data => {
        this.lstEntidades = data;
      });

      this.service.getMarcas()
      .subscribe(data => {
        this.lstMarcas = data;
      });

      this.service.getITipTarj()
      .subscribe(data => {
        this.lstITipTarj = data;
      });
  }
  Guardartarj(){
    set: this.tarjeta.codent = this.entidadSelect;
    set: this.tarjeta.codmar = this.marcaSelect;
    set: this.tarjeta.indtipt = this.iTipTarjSelect;
    

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
