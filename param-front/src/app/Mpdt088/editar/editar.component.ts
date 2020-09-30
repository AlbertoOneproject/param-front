import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Mpdt088 } from './../../Modelo/mpdt088.model';
import { Mpdt088Service } from '../../Service/mpdt088.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  editaMpdt088: FormGroup;
  mpdt088: Mpdt088;
  public codent: string;
  public producto: string;
  public subprodu: string;
  public codmar: string;
  public indtipt: string;
  public fecalta: string;
  public fecbaja: string;
  public limcremes: string;
  public limdebmes: string;
  public maxoper: string;
  public limcredia: string;
  public limdebdia: string;
  public limdiacaj: string;
  public maxopecaj: string;
  public maxodia: string;
  public salmaxmon: string;
  public cargamax: string;
  public consumax: string;
  public indacpalt: string;
  public indacpren: string;
  public vigtar: string;
  public vigtarren: string;
  public codentumo: string;
  public codofiumo: string;
  public usuarioumo: string;
  public codtermumo: string;
  public contcur: string;


  constructor(private formBuilder: FormBuilder,
    private service: Mpdt088Service, 
    private router: Router,
    private route: ActivatedRoute) {
      this.route.queryParams.subscribe(params => {
        this.codent = params["codent"];
        this.producto = params["producto"];
        this.subprodu = params["subprodu"];
        this.codmar = params["codmar"];
        this.indtipt = params["indtipt"];
        this.fecalta = params["fecalta"];
        this.fecbaja = params["fecbaja"];
        this.limcremes = params["limcremes"];
        this.limdebmes = params["limdebmes"];
        this.maxoper = params["maxoper"];
        this.limcredia = params["limcredia"];
        this.limdebdia = params["limdebdia"];
        this.limdiacaj = params["limdiacaj"];
        this.maxopecaj = params["maxopecaj"];
        this.maxodia = params["maxodia"];
        this.salmaxmon = params["salmoxon"];
        this.cargamax = params["cargamax"];
        this.consumax = params["consumax"];
        this.indacpalt = params["indacpalt"];
        this.indacpren = params["indacpren"];
        this.vigtar = params["vigtar"];
        this.vigtarren = params["vigtarren"];
        this.codentumo = params["codentumo"];
        this.codofiumo  = params["codofiumo"];
        this.usuarioumo = params["usuarioumo"];
        this.codtermumo = params["codtermumo"];
        this.contcur = params["contcur"];
      })  }

  ngOnInit(): void {
    this.editaMpdt088 = this.formBuilder.group({
      'codent': new FormControl({value:'', disabled: true}),
      'producto': new FormControl({value:'', disabled: true}),
      'subprodu': new FormControl({value:'', disabled: true}),
      'codmar;': new FormControl('', [Validators.required]),
      'indtipt': new FormControl('', [Validators.required]),
      'fecalta': new FormControl('', [Validators.required]),
      'fecbaja': new FormControl('', [Validators.required]),
      'limcremes': new FormControl('', [Validators.required]),
      'limdebmes': new FormControl('', [Validators.required]),
      'maxoper': new FormControl('', [Validators.required]),
      'limcredia': new FormControl('', [Validators.required]),
      'limdebdia': new FormControl('', [Validators.required]),
      'limdiacaj': new FormControl('', [Validators.required]),
      'maxodia': new FormControl('', [Validators.required]),
      'salmoxon': new FormControl('', [Validators.required]),
      'cargamax': new FormControl('', [Validators.required]),
      'consumax': new FormControl('', [Validators.required]),
      'indacpalt': new FormControl('', [Validators.required]),
      'indacpren;': new FormControl('', [Validators.required]),
      'vigtar': new FormControl('', [Validators.required]),
      'vigtarren': new FormControl('', [Validators.required]),
      'codentumo': new FormControl('', [Validators.required]),
      'codofiumo': new FormControl('', [Validators.required]),
      'usuarioumo': new FormControl('', [Validators.required]),
      'codtermumo': new FormControl('', [Validators.required]),
      'contcur': new FormControl('', [Validators.required]),
    });

    this.editaMpdt088.controls["codent"].setValue(this.codent);
    this.editaMpdt088.controls["producto"].setValue(this.producto);
    this.editaMpdt088.controls["subprodu"].setValue(this.subprodu);
    this.editaMpdt088.controls["codmar"].setValue(this.codmar);
    this.editaMpdt088.controls["indtipt"].setValue(this.indtipt);
    this.editaMpdt088.controls["fecalta"].setValue(this.fecalta);
    this.editaMpdt088.controls["fecbaja"].setValue(this.fecbaja);
    this.editaMpdt088.controls["limcremes"].setValue(this.limcremes);
    this.editaMpdt088.controls["limdebmes"].setValue(this.limdebmes);
    this.editaMpdt088.controls["maxoper"].setValue(this.maxoper);
    this.editaMpdt088.controls["limcredia"].setValue(this.limcredia);
    this.editaMpdt088.controls["limdebdia"].setValue(this.limdebdia);
    this.editaMpdt088.controls["limdiacaj"].setValue(this.limdiacaj);
    this.editaMpdt088.controls["maxopecaj"].setValue(this.maxopecaj);
    this.editaMpdt088.controls["maxodia"].setValue(this.maxodia);
    this.editaMpdt088.controls["salmaxmon"].setValue(this.salmaxmon);
    this.editaMpdt088.controls["cargamax"].setValue(this.cargamax);
    this.editaMpdt088.controls["consumax"].setValue(this.consumax);
    this.editaMpdt088.controls["indacpalt"].setValue(this.indacpalt);
    this.editaMpdt088.controls["indacpren"].setValue(this.indacpren);
    this.editaMpdt088.controls["vigtar"].setValue(this.vigtar);
    this.editaMpdt088.controls["vigtarren"].setValue(this.vigtarren);
    this.editaMpdt088.controls["codentumo"].setValue(this.codentumo);
    this.editaMpdt088.controls["codofiumo"].setValue(this.codofiumo);
    this.editaMpdt088.controls["usuarioumo"].setValue(this.usuarioumo);
    this.editaMpdt088.controls["codtermumo"].setValue(this.codtermumo);
    this.editaMpdt088.controls["contcur"].setValue(this.contcur);
  }

  get ant1() { return this.editaMpdt088.controls; }

  editMppamsat(){

    console.log("entra")

    if (this.editaMpdt088.invalid){
        return;
    }

    console.log("pasa")
    
    this.mpdt088 = {codent: this.ant1.codent.value, producto: this.ant1.producto.value, subprodu: this.ant1.subprodu.value,
      codmar: this.ant1.codmar.value, indtipt: this.ant1.indtipt.value, fecalta: this.ant1.fecalta.value, 
      fecbaja: this.ant1.fecbaja.value, limcremes: this.ant1.limcremes.value, limdebmes: this.ant1.limdebmes.value,
      maxoper: this.ant1.maxoper.value, limcredia: this.ant1.limcredia.value, limdebdia: this.ant1.limdebdia.value,
      limdiacaj: this.ant1.limdiacaj.value, maxopecaj: this.ant1.maxopecaj.value, maxodia: this.ant1.maxodia.value,
      salmaxmon: this.ant1.salmaxmon.value, cargamax: this.ant1.cargamax.value, consumax: this.ant1.consumax.value,
      indacpalt: this.ant1.indacpalt.value, indacpren: this.ant1.indacpren.value, vigtar: this.ant1.vigtar.value,
      vigtarren: this.ant1.vigtarren.value, codentumo: this.ant1.codentumo.value, codofiumo: this.ant1.codofiumo.value,
      usuarioumo: this.ant1.usuarioumo.value, codtermumo: this.ant1.limdiacaj.value, contcur: this.ant1.contcur.value} 
      

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
