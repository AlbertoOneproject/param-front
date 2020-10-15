import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {Mpdt026Service} from 'src/app/Service/mpdt026.service';
import { Mpdt026} from 'src/app/Modelo/Mpdt026';


@Component({
  selector: 'app-addt026',
  templateUrl: './addt026.component.html',
  styleUrls: ['./addt026.component.css']
})
export class Addt026Component implements OnInit {

  mpdt026:Mpdt026 = new Mpdt026();
  lstEntidades : string[];
  lstProductos : string[];
  lstSubProductos : string[];

  constructor(private router:Router,private service:Mpdt026Service) { }
  
  ngOnInit(): void {
  }

  Guardar026(){
    set: this.mpdt026.codentumo = '0166';
    set: this.mpdt026.codofiumo = '0001';
    set: this.mpdt026.usuarioumo = 'ALEX0001';
    set: this.mpdt026.codtermumo = '99999999';
    set: this.mpdt026.contcur =  '2020-08-20 00:00:00';
    this.service.createMpdt026(this.mpdt026)
    .subscribe(data=>{
      alert("Se agrego con exito");
      this.router.navigate(["lista026"])
    })
  }

}

