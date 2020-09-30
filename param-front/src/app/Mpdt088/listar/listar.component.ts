import { Component, OnInit } from '@angular/core';
import { Mpdt088 } from '../../Modelo/mpdt088.model';
import { Mpdt088Service } from '../../Service/mpdt088.service';
import { Router, NavigationExtras } from '@angular/router';
import { AltaComponent } from '../alta/alta.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from "./../dialogo-confirmacion";

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  dataSource = []; 
  data: any[];
  columns: string[]
  name: string;
  color: string;
  displayedColumns:string[] =  ['codent', 'producto', 'subprodu', 'codmar',
  'indtipt', 'fecalta', 'fecbaja', 'limcremes', 'limdebmes', 'maxoper', 'limcredia',
  'limdebdia', 'limdiacaj', 'maxodia', 'salmaxmon', 'cargamax', 'consumax', 'indacpalt',
  'indacpren', 'vigtar', 'vigtarren', 'codentumo', 'codofiumo', 'usuarioumo', 'codtermumo',
   'contcur']

  constructor(private service: Mpdt088Service, private router: Router,
    public dialog: MatDialog) { }

    ngOnInit() {

      this.consultaMpdt088(); 
    }
  
    consultaMpdt088(){
  
      this.service.getMpdt088()
      .subscribe(data => {
        this.dataSource = data;
  
        console.log("this.dataSource")
        console.log(this.dataSource)
        //this.columns = Object.keys(this.data[0]);
     
      });
  
  
    }
  
  
    altaMpdt088(){
  
        this.router.navigateByUrl('alta');
    }
  
    editaMpdt088(mpdt088:Mpdt088):void{
  
      let navigationExtras: NavigationExtras = {
        queryParams: {
          "codent": mpdt088.codent,
          "producto": mpdt088.producto,
          "subprodu": mpdt088.subprodu,
          "codmar": mpdt088.codmar,
          "indtipt": mpdt088.indtipt,
          "fecalta": mpdt088.fecalta,
          "fecbaja": mpdt088.fecbaja,
          "limcremes": mpdt088.limcremes,
          "limdebmes": mpdt088.limdebmes,
          "maxoper": mpdt088.maxoper,
          "limcredia": mpdt088.limcredia,
          "limdebdia": mpdt088.limdebdia,
          "limdiacaj": mpdt088.limdiacaj,
          "maxopecaj": mpdt088.maxopecaj,
          "maxodia": mpdt088.maxodia,
          "salmaxmon": mpdt088.salmaxmon,
          "cargamax": mpdt088.cargamax,
          "consumax": mpdt088.consumax,
          "indacpalt": mpdt088.indacpalt,
          "indacpren": mpdt088.indacpren,
          "vigtar": mpdt088.vigtar,
          "vigtarren": mpdt088.vigtarren,
          "codentumo": mpdt088.codentumo,
          "codofiumo": mpdt088.codofiumo,
          "usuarioumo": mpdt088.usuarioumo,
          "codtermumo": mpdt088.codtermumo,
          "contcur": mpdt088.contcur,
        }
      };
   
      this.router.navigate(["editar"], navigationExtras);
    }
  
  
    deleteRowData(mpdt088:Mpdt088){
  
      this.service.deleteMpdt088(mpdt088.codent, mpdt088.producto,
        mpdt088.subprodu)
      .subscribe(data=>{
        this.consultaMpdt088();
      })
     
     
    }
  
    listarMpdt088(){
  
      this.service.getMpdt088()
        .subscribe(data => {
          this.dataSource = data;
  
          var ELEMENT_DATA: any[] = [{codent: data[0].codent, producto: data[0].producto, subprodu: data[0].subprodu,
                              codmar: data[0].codmar, indtipt: data[0].indtipt, fecalta: data[0].fecalta, fecbaja:  data[0].fecbaja,
                              limcremes: data[0].limcremes, limdebmes: data[0].limdebmes, maxoper: data[0].maxoper,
                              limcredia: data[0].limcredia, limdebdia: data[0].limdebdia, limdiacaj: data[0].limdiacaj,
                              maxopecaj: data[0].maxopecaj, maxodia: data[0].maxodia, salmoxon: data[0].salmaxmon,
                              cargamax: data[0].cargamax, consumax: data[0].consumax, indacpalt: data[0].indacpalt,
                              indacpren: data[0].indacpren, vigtar: data[0].vigtar, vigtarren: data[0].vigtarren,
                              codentumo: data[0].codentumo, codofiumo: data[0].codofiumo, usuarioumo: data[0].usuarioumo,
                              codtermumo: data[0].codtermumo, contcur: data[0].contcur}];
                              this.data = ELEMENT_DATA;
                              //this.columns = Object.keys(this.data[0]);
       
        });
  
    }
  
    openDialog(): void {
         const dialogRef = this.dialog.open(AltaComponent, {
           width: '900px',
           data: { name: this.name, color: this.color }
  
         });
  
         dialogRef.afterClosed().subscribe(res => {
          this.consultaMpdt088(); 
           this.color = res;
           
         });
    }
  
    openDialogConfirm(action,obj) {
      obj.action = action;
      console.log(obj)
      console.log(obj.action)
      const dialogRef = this.dialog.open(DialogoConfirmacionComponent, {
        width: '350px',
        data:obj
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if(result.event == 'Delete'){
          this.deleteRowData(obj);
        }
      });
    }
   
  
  }
  
