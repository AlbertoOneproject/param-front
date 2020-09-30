import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Mpdt088 } from '../../Modelo/mpdt088.model';

@Component({
  selector: 'app-dialogo-confirmacion',
  templateUrl: './dialogo-confirmacion.component.html',
  styleUrls: ['./dialogo-confirmacion.component.css']
})
export class DialogoConfirmacionComponent implements OnInit {

  action:string;
  local_data:any;

  constructor(public dialogRef: MatDialogRef<DialogoConfirmacionComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Mpdt088) { }

    doAction(){
      this.dialogRef.close({event:'Delete'});
    }
  
    closeDialog(){
      this.dialogRef.close({event:'Cancel'});
    }

  ngOnInit(): void {
  }

}
