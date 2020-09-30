import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoSat } from '../Modelo/ProductoSat';

@Injectable({
  providedIn: 'root'
})
export class ProductoSatService {

  constructor(private http: HttpClient) { }
  url='http://localhost:8080/productoSat';

  getProductoSat() {
    return this.http.get<ProductoSat[]>(this.url);
  }

  
  getProductoSatId(codNrbeEnt :String, idPrdSat :String, idSPrdSat :String, codLinea  :String){
    return this.http.get<ProductoSat>(this.url + "/" + codNrbeEnt + idPrdSat + idSPrdSat + codLinea );

  }

  postProductoSat(productoSat : ProductoSat) {
      return this.http.post<ProductoSat> (this.url, productoSat);
  }

  putProductoSat(productoSat : ProductoSat) {
    return this.http.put<ProductoSat> (this.url, productoSat);
  }

  delProductoSat(codNrbeEnt :String, idPrdSat :String, idSPrdSat :String, codLinea  :String){
    return this.http.delete<ProductoSat> (this.url+ "/" + codNrbeEnt + idPrdSat + idSPrdSat + codLinea)
  }
}

