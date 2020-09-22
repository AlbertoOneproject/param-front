import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Mpdt026Service} from '../../Service/mpdt026.service';
import { Mpdt026} from 'src/app/Modelo/Mpdt026';


@Component({
  selector: 'app-listar026',
  templateUrl: './listart026.component.html',
  styleUrls: ['./listart026.component.css']
})

export class Listar026Component implements OnInit {
  mpdt026s:Mpdt026[]; 
  constructor(private service:Mpdt026Service, private router:Router) { }

  ngOnInit(): void {
    this.service.getMpdt026()
    .subscribe(data => {
      this.mpdt026s = data;

  })
  }
  Editar026(mpdt026:Mpdt026):void{
    localStorage.setItem("codent",mpdt026.codent.toString());
    localStorage.setItem("codmar",mpdt026.codmar.toString()); 
    console.log("llaveCTS"+mpdt026.codent+mpdt026.codmar);
    this.router.navigate(["edit026"]);  
  }
  deleteMpdt026(mpdt026:Mpdt026){
    localStorage.setItem("codent",mpdt026.codent.toString());
    localStorage.setItem("codmar",mpdt026.codmar.toString()); 
    this.service.deleteMpdt026(
      mpdt026.codent.toString(),
      mpdt026.codmar.toString())
        
     .subscribe( data=>{
       console.log("llaveCTS"+mpdt026.codent+mpdt026.codmar)
       this.mpdt026s=this.mpdt026s.filter(p=>p!==mpdt026);
       alert ("Parametro Eliminado")
     }) 
    }
}
