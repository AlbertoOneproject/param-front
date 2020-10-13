import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TarjetaService } from '../../Service/tarjeta.service';
import { Tarjeta } from 'src/app/Modelo/Tarjeta';

@Component({
  selector: 'app-edittarj',
  templateUrl: './edittarj.component.html',
  styleUrls: ['./edittarj.component.css']
})
export class EdittarjComponent implements OnInit {

  tarjeta:Tarjeta = new Tarjeta();
  constructor(private service:TarjetaService,private router:Router) { }

  ngOnInit(): void {
    let codent=localStorage.getItem("codent");
    let codmar=localStorage.getItem("codmar");
    let indtipt=localStorage.getItem("indtipt");
    let binenttip=localStorage.getItem("binenttip");
    let binproc=localStorage.getItem("binproc");
    let numulttar=localStorage.getItem("numulttar");
    this.service.getTarjetaId(codent,codmar,indtipt,binenttip,binproc,numulttar)
    .subscribe(data=>{this.tarjeta=data;})
  }

  EditarParm(){
    let codent=localStorage.getItem("codent");
    let codmar=localStorage.getItem("codmar");
    let indtipt=localStorage.getItem("indtipt");
    let binenttip=localStorage.getItem("binenttip");
    let binproc=localStorage.getItem("binproc");
    let numulttar=localStorage.getItem("numulttar");
    this.service.getTarjetaId(codent,codmar,indtipt,binenttip,binproc,numulttar)
    .subscribe(data=>{this.tarjeta=data;})

//    this.service.getParametroId(codent, centalta, producto, subprodu, condpro)
//    .subscribe(data=>{
//      this.parametro=data;
//   })
  }

  Guardartarj(){
    set: this.tarjeta.codentumo = "CODE";
    set: this.tarjeta.codofiumo = "CODO";
    set: this.tarjeta.usuarioumo = "ANGUMP26";
    set: this.tarjeta.codtermumo = "TERMUMO";
    set: this.tarjeta.contcur =  null;
    this.service.updateTarjeta(this.tarjeta)
    .subscribe(data=>{
      alert("Se modificó con exito...!");
      this.router.navigate(["listartarj"]);
    })
  }

}
