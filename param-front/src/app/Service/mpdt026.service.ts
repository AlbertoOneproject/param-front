import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Mpdt026} from '../Modelo/Mpdt026';

@Injectable()
export class Mpdt026Service {
  constructor(private http:HttpClient) {}
  Url='http://localhost:8080/mpdt026';

  getMpdt026(){
    return this.http.get<Mpdt026[]>(this.Url);
  }
  
  getMpdt026Id(
    codent:String,
    codmar:String){
      console.log("llave" +codent+codmar);
      return this.http.get<Mpdt026>(this.Url+"/"+codent+codmar);  
    }

    //Nuevo filtro
  getMpdt026Filtro(
      entidad:String,
      marca:String)  
      {      
        console.log("entidad, marca");
        console.log(entidad)
        console.log(marca)

        return this.http.get<Mpdt026[]>(this.Url+"/?entidad="+ entidad+"&marca=" + marca);  
      }
    //Nueva consulta solo entidad  
    getMpdt026Entidad(
      ){
       return this.http.get<string[]>(this.Url+"/entidad");
      }

    //Nueva consulta de Marca
    getMpdt026Marca(entidad:String,marca:String
      ){
        console.log("entidad para marca");
        console.log(entidad)
        
       return this.http.get<string[]>(this.Url+"/mpdt026/"+entidad);
      }

      

  updateMpdt026(mpdt026:Mpdt026){
      return this.http.put<Mpdt026>(this.Url,mpdt026);
    }    

  createMpdt026(mpdt026:Mpdt026){
    console.log(mpdt026);
    return this.http.post<Mpdt026>(this.Url,mpdt026);

  }

  deleteMpdt026(  
    codent:String,
    codmar:String){
      console.log("delete Mpdt026" +codent+codmar)
      return this.http.delete<Mpdt026>(this.Url+"/"+codent+codmar);
    } 
}
