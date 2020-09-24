import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tarjeta } from '../Modelo/Tarjeta';

@Injectable()
export class TarjetaService {
  
  constructor(private http:HttpClient) { }
  Url='http://localhost:8080/mpdt025';

  getTarjetas(){
    return this.http.get<Tarjeta[]>(this.Url);
  }
  createTarjeta(tarjeta:Tarjeta){
    return this.http.post<Tarjeta>(this.Url,tarjeta);
  }
  getTarjetaId(codent:String,codmar:String,indtipt:String){
    return this.http.get<Tarjeta>(this.Url+"/"+codent+codmar+indtipt);
  }
  updateTarjeta(tarjeta:Tarjeta){
      return this.http.put<Tarjeta>(this.Url,tarjeta);
  }
  deleteTarjeta(codent:String,codmar:String,indtipt:String){
    return this.http.delete<Tarjeta>(this.Url+"/"+codent+codmar+indtipt);
  }
}
