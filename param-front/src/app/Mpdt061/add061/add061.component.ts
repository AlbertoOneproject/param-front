import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {Mpdt061Service} from 'src/app/Service/mpdt061.service';
import { Mpdt061} from 'src/app/Modelo/Mpdt061';


@Component({
  selector: 'app-add061',
  templateUrl: './add061.component.html',
  styleUrls: ['./add061.component.css']
})
export class Add061Component implements OnInit {
  
  mpdt061:Mpdt061 = new Mpdt061();
  public ListaIcaent: string[];  
  //public icaent: string;                                           

  constructor(private router:Router,private service:Mpdt061Service) { }

  ngOnInit(): void {
    this.service.getMpdt061Icaent()
    .subscribe(data => {
      this.ListaIcaent = data; 
  })
  }

  Guardar026(){
    set: this.mpdt061.codentumo = '0166';
    set: this.mpdt061.codofiumo = '0001';
    set: this.mpdt061.usuarioumo = 'JMDC0001';
    set: this.mpdt061.codtermumo = '99999999';
    set: this.mpdt061.contcur =  '2020-08-20 00:00:00';
    console.log("mpdt0611")
    console.log(this.mpdt061)
    this.service.createDt061(this.mpdt061)
    .subscribe(data=>{
      alert("Se agrego con exito");
      this.router.navigate(["lista026"])
    })
  }



}

