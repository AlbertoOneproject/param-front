import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tarjeta } from '../Modelo/Tarjeta';

@Injectable()
export class TarjetaService {
  
  lstEntidades : string[];
  lstMarcas : string[];

  constructor(private http:HttpClient) { }
  Url='http://localhost:8080/mpdt025';
  UrlServ='http://localhost:8080/mpdt026';
  UrlServLim='http://localhost:8080/mpdt061';

  getTarjetas(){
    return this.http.get<Tarjeta[]>(this.Url);
  }
  createTarjeta(tarjeta:Tarjeta){
    return this.http.post<Tarjeta>(this.Url,tarjeta);
  }
  getTarjetaId(codent:String,codmar:String,indtipt:String,binenttip:String,binproc:String,numulttar:String){
    return this.http.get<Tarjeta>(this.Url+"/unico?codent="+codent+"&codmar="+codmar+"&indtipt="+indtipt+"&binenttip="+binenttip+"&binproc="+binproc+"&numulttar="+numulttar);
  }
  updateTarjeta(tarjeta:Tarjeta){
      return this.http.put<Tarjeta>(this.Url,tarjeta);
  }
  deleteTarjeta(codent:String,codmar:String,indtipt:String,binenttip:String,binproc:String,numulttar:String){
    return this.http.delete<Tarjeta>(this.Url+"/?codent="+codent+"&codmar="+codmar+"&indtipt="+indtipt+"&binenttip="+binenttip+"&binproc="+binproc+"&numulttar="+numulttar);
  }

  //http://localhost:8080/mpdt025/?codent=0903&codmar=20&indtipt=33&binenttip=551507&binproc=551507&numulttar=0

  getEntidades(){
    return this.http.get<string[]>(this.UrlServ+"/entidad");
  } 
  
  getMarcas(entidad:string){
    return this.http.get<string[]>(this.UrlServ+"/marca?entidad="+entidad);
  }

  getITipTarj(entidad:string, marca:string){
    return this.http.get<string[]>(this.UrlServ+"/itipotarj?entidad="+entidad+"?marca="+marca);
  }

  getBinProc(){
    return this.http.get<string[]>(this.UrlServLim+"/binpre");
  }

  getRangSup(){
    return this.http.get<string[]>(this.UrlServLim+"/rangsup");
  }

  getRangInf(){
    return this.http.get<string[]>(this.UrlServLim+"/ranginf");
  }

}
