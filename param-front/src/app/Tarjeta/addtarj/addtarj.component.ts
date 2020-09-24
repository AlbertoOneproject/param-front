import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TarjetaService } from 'src/app/Service/tarjeta.service';
import { Tarjeta } from 'src/app/Modelo/Tarjeta';

@Component({
  selector: 'app-addtarj',
  templateUrl: './addtarj.component.html',
  styleUrls: ['./addtarj.component.css']
})
export class AddtarjComponent implements OnInit {

  tarjeta:Tarjeta = new Tarjeta();
  constructor(private router:Router, private service:TarjetaService) { }

  ngOnInit() {
  }

  Guardartarj(){
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
