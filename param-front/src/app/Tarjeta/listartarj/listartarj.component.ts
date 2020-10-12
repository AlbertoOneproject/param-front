import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TarjetaService } from '../../Service/tarjeta.service'
import { Tarjeta } from 'src/app/Modelo/Tarjeta';

@Component({
  selector: 'app-listartarj',
  templateUrl: './listartarj.component.html',
  styleUrls: ['./listartarj.component.css']
})
export class ListartarjComponent implements OnInit {
  tarjetas: Tarjeta[];
  constructor(private service:TarjetaService,private router:Router) { }

  ngOnInit() {
    this.service.getTarjetas()
      .subscribe(data => {
        this.tarjetas = data;
      });
  }
  Edittarj(tarjeta:Tarjeta):void{
    localStorage.setItem("codent",tarjeta.codent.toString());
    localStorage.setItem("codmar",tarjeta.codmar.toString());
    localStorage.setItem("indtipt",tarjeta.indtipt.toString());
    localStorage.setItem("binenttip",tarjeta.binenttip.toString());
    localStorage.setItem("binproc",tarjeta.binproc.toString());
    localStorage.setItem("numulttar",tarjeta.numulttar.toString());
    this.router.navigate(["edittarj"]);
  }

  Addtarj():void{
    this.router.navigate(["addtarj"]);
  }
  Deletetarj(tarjeta:Tarjeta){
    localStorage.setItem("codent",tarjeta.codent.toString());
    localStorage.setItem("codmar",tarjeta.codmar.toString());
    localStorage.setItem("indtipt",tarjeta.indtipt.toString());
    localStorage.setItem("binenttip",tarjeta.binenttip.toString());
    localStorage.setItem("binproc",tarjeta.binproc.toString());
    localStorage.setItem("numulttar",tarjeta.numulttar.toString());
    this.service.deleteTarjeta(tarjeta.codent.toString(),tarjeta.codmar.toString(),tarjeta.indtipt.toString(),tarjeta.binenttip.toString(),tarjeta.binproc.toString(),tarjeta.numulttar.toString())
    .subscribe(data=>{
      this.tarjetas=this.tarjetas.filter(p=>p!==tarjeta);
      alert("Tarjeta eliminada...");
    })
  }

}
