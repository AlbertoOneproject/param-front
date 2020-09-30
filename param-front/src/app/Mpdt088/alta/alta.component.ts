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
  altaMpparamsat: FormGroup;
  mpdt088: Mpdt088;

  codent;
  centalta;
  producto;
  subprodu;
  condpro;
  codcam;
  codconven;
  codpromo;
  numper;
  numperaval;
  indctaemp;


  constructor(private formBuilder: FormBuilder,
    private service: Mpdt088Service, 
    private router: Router,
    public dialogRef: MatDialogRef<AltaComponent>) { }

  ngOnInit(): void {

     this.altaMpparamsat = this.formBuilder.group({
       'codent': new FormControl('', [Validators.required]),
       'centalta': new FormControl('', [Validators.required]),
       'producto': new FormControl('', [Validators.required]),
       'subprodu': new FormControl('', [Validators.required]),
       'condpro': new FormControl('', [Validators.required]),
       'codcam': new FormControl('', [Validators.required]),
       'codconven': new FormControl('', [Validators.required]),
       'codpromo': new FormControl('', [Validators.required]),
       'numper': new FormControl('', [Validators.required]),
       'numperaval': new FormControl('', [Validators.required]),
       'indctaemp': new FormControl('', [Validators.required])
     });

  }

  get ant1() { return this.altaMpparamsat.controls; }

  addMppamsat(){


    if (this.altaMpparamsat.invalid){
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
