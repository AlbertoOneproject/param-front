import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mpdt061 } from '../Modelo/Mpdt061';

@Injectable({
  providedIn: 'root'
})
export class Mpdt061Service {

  constructor(private http:HttpClient) { }
  Url='http://localhost:8080/mpdt061';
  Url1='http://localhost:8080/productoSat';
  

  getDt061(){
    return this.http.get<Mpdt061[]>(this.Url);
  }
  createDt061(mpdt061:Mpdt061){
    return this.http.post<Mpdt061>(this.Url,mpdt061);
  }
  getDt061Id(codent:String,codmar:String,indtipt:String){
    return this.http.get<Mpdt061>(this.Url+"/"+codent+codmar+indtipt);
  }
  updateDt061(mpdt061:Mpdt061){
      return this.http.put<Mpdt061>(this.Url,mpdt061);
  }
  deleteDt061(binpre:String,binprepro:String){
    return this.http.delete<Mpdt061>(this.Url+"/"+binpre+binprepro);
  }
  //Nueva consulta solo entidad  
  getMpdt061Icaent(){
    return this.http.get<string[]>(this.Url1+"/entidades");
  }
  
}
