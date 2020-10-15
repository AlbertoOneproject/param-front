import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Mpdt088 } from './../../Modelo/mpdt088.model';
import { Mpdt088Service } from '../../Service/mpdt088.service';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  mpdt088 :Mpdt088;
  constructor(private router:Router,private service:Mpdt088Service) { }

  ngOnInit(): void {
    
    this.buscarMpdt088ID();
   
  }

  buscarMpdt088ID(){
    let codent=localStorage.getItem("codent");
    let producto=localStorage.getItem("producto");
    let subprodu=localStorage.getItem("subprodu");
    this.service.getMpdt088Id(codent, producto, subprodu )
    .subscribe(data=>{
      this.mpdt088=data;
    })

  }


  editMpdt088(mpdt088: Mpdt088){ 
    console.log(mpdt088)  
    this.service.updateMpdt088(this.mpdt088)
    .subscribe(data=>{
      alert("Se actualizó...!!!");
      this.router.navigate(["listar"]);
    })
  }

  cancelar(){

    this.router.navigate(["listar"]);

  }

}
