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
        console.log("data061")
        console.log(data)
        this.mpdt061s = data; 
//        console.log(this.mpdt061s.Binpre.value)
//        console.log(this.mpdt061s.Binpre[1]])
      });                     
  }                           
  

}