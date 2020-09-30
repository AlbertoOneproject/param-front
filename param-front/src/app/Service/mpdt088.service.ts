import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mpdt088 } from '../Modelo/mpdt088.model';

@Injectable({
  providedIn: 'root'
})
export class Mpdt088Service {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/mpdt088';

  getMpdt088(){
    return this.http.get<Mpdt088[]>(this.Url);
  }
  createMpdt088(data:Mpdt088){
    console.log("data")
    console.log(data)
    return this.http.post<Mpdt088>(this.Url,data);
  }
  getMpdt088Id(codent:String,producto:String, subprodu:String){
    return this.http.get<Mpdt088>(this.Url+"/"+codent+producto+subprodu);
  }
  updateMpdt088(data:Mpdt088){
      return this.http.put<Mpdt088>(this.Url,data);
  }
  deleteMpdt088(codent:String,producto:String, subprodu:String){

    console.log(codent+ " " +producto+ " " +subprodu)
    return this.http.delete<Mpdt088
    >(this.Url+"/"+codent+producto+subprodu);
  }
}
