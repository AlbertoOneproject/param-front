import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Mpdt088 } from '../../Modelo/mpdt088.model';
import { Mpdt088Service } from '../../Service/mpdt088.service';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent implements OnInit {
  altaMpdt088: FormGroup;
  mpdt088: Mpdt088;

  codent;
  producto;
  subprodu;
  codmar;
  indtipt;
  fecalta;
  fecbaja;
  limcremes;
  limdebmes;
  maxoper;
  limcredia;
  limdebdia;
  limdiacaj;
  maxopecaj;
  maxodia;
  salmaxmon;
  cargamax;
  consumax;
  indacpalt;
  indacpren;
  vigtar;
  vigtarren;
  codentumo;
  codofiumo;
  usuarioumo;
  codtermumo;
  contcur;


  constructor(private formBuilder: FormBuilder,
    private service: Mpdt088Service, 
    private router: Router,
    public dialogRef: MatDialogRef<AltaComponent>) { }

  ngOnInit(): void {

     this.altaMpdt088 = this.formBuilder.group({
       'codent': new FormControl('', [Validators.required]),
       'producto': new FormControl('', [Validators.required]),
       'subprodu': new FormControl('', [Validators.required]),
       'codmar': new FormControl('', [Validators.required]),
       'indtipt': new FormControl('', [Validators.required]),
       'fecalta': new FormControl('', [Validators.required]),
       'fecbaja': new FormControl('', [Validators.required]),
       'limcremes': new FormControl('', [Validators.required]),
       'limdebmes': new FormControl('', [Validators.required]),
       'maxoper': new FormControl('', [Validators.required]),
       'limcredia': new FormControl('', [Validators.required]),
       'limdebdia': new FormControl('', [Validators.required]),
       'limdiacaj': new FormControl('', [Validators.required]),
       'maxopecaj': new FormControl('', [Validators.required]),
       'maxodia': new FormControl('', [Validators.required]),
       'salmoxon': new FormControl('', [Validators.required]),
       'cargamax': new FormControl('', [Validators.required]),
       'consumax': new FormControl('', [Validators.required]),
       'indacpalt': new FormControl('', [Validators.required]),
       'indacpren': new FormControl('', [Validators.required]),
       'vigtar': new FormControl('', [Validators.required]),
       'vigtarren': new FormControl('', [Validators.required]),
       'codentumo': new FormControl('', [Validators.required]),
       'codofiumo': new FormControl('', [Validators.required]),
       'usuarioumo': new FormControl('', [Validators.required]),
       'codtermumo': new FormControl('', [Validators.required]),
       'contcur': new FormControl('', [Validators.required])
     });

  }

  get ant1() { return this.altaMpdt088.controls; }

  addMppamsat(){


    if (this.altaMpdt088.invalid){
        return;
    }

    
    this.mpdt088 = {codent: this.ant1.codent.value, producto: this.ant1.producto.value, subprodu: this.ant1.subprodu.value,
      codmar: this.ant1.codmar.value, indtipt: this.ant1.indtipt.value, fecalta: this.ant1.fecalta.value, 
      fecbaja: this.ant1.fecbaja.value, limcremes: this.ant1.limcremes.value, limdebmes: this.ant1.limdebmes.value,
      maxoper: this.ant1.maxoper.value, limcredia: this.ant1.limcredia.value, limdebdia: this.ant1.limdebdia.value,
      limdiacaj:0,
      maxopecaj:7,
      maxodia:8,
      salmaxmon:9,
      cargamax:2,
      consumax:3,
      indacpalt:"ofiv",
      indacpren:"ofiv",
      vigtar:5,
      vigtarren:6,
      codentumo:"ofiv",
      codofiumo:"ofiv",
      usuarioumo:"ofiv",
      codtermumo:"ofiv",
      contcur:"ofiv"} 

    this.service.createMpdt088(this.mpdt088)
    .subscribe(data=>{
      alert("Se Agrego con Exito...!!!");
      this.dialogRef.close();
      this.router.navigate(["listar"]);

    })
  }

  cancelar(){

    this.dialogRef.close();
  }

}
