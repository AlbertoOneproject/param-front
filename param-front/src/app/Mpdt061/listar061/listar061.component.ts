import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';                           
import { Mpdt061Service } from '../../Service/mpdt061.service'      
import { Mpdt061 } from 'src/app/Modelo/Mpdt061';                   

@Component({
  selector: 'app-listar061',
  templateUrl: './listar061.component.html',
  styleUrls: ['./listar061.component.css']
})
export class Listar061Component implements OnInit {
  mpdt061s: Mpdt061[];       
  constructor(private service: Mpdt061Service, private router: Router) { }

  ngOnInit() {                
    this.service.getDt061()
      .subscribe(data => {    
        this.mpdt061s = data; 
      });                     
  }                           
  Editar061(mpdt061:Mpdt061):void{
    localStorage.setItem("binpre",mpdt061.binpre.toString());
    localStorage.setItem("binprepro",mpdt061.binprepro.toString()); 
    console.log("llaveCTS"+mpdt061.binpre+mpdt061.binprepro);
    this.router.navigate(["edit061"]);  
  }

  deleteMpdt061(mpdt061:Mpdt061){
    localStorage.setItem("binpre",mpdt061.binpre.toString());
    localStorage.setItem("binprepro",mpdt061.binprepro.toString()); 
    this.service.deleteDt061( 
      mpdt061.binpre.toString(),
      mpdt061.binprepro.toString())
        
     .subscribe( data=>{
       console.log("llaveCTS"+mpdt061.binpre+mpdt061.binprepro)
       this.mpdt061s=this.mpdt061s.filter(p=>p!==mpdt061);
       alert ("Parametro Eliminado")
     }) 
    }
  

}