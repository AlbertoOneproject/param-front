import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Producto } from '../Modelo/Producto';

@Injectable()

export class ProductoService {
  constructor(private http: HttpClient) { }

  Url = 'http://localhost:8080/mpdt043/';
  urlListas='http://localhost:8080/productoSat';

  getProductos() {
    return this.http.get<Producto[]>(this.Url);
  }

  createProducto(producto: Producto) {
    return this.http.post<Producto>(this.Url, producto);
  }

  getProductoId(codent: String, producto: String, subprodu: String) {
    return this.http.get<Producto>(this.Url + "/id=" + codent + producto + subprodu);
  }

  updateProducto(producto: Producto) {
    return this.http.put<Producto>(this.Url, producto);
  }

  deleteProducto(codent: String, producto: String, subprodu: String) {
    return this.http.delete<Producto>(this.Url + "/id=" + codent + producto + subprodu);
  }

  getProductosSat(codent : String){
    return this.http.get<string[]> (this.urlListas + "/productos/" + codent);
  }

  getSubProductosSat(codentprod : String){
    return this.http.get<string[]> (this.urlListas + "/subproductos/" + codentprod);
  }

  getLstEntidades(){
    return this.http.get<string[]> (this.Url + "Srvmp04301");
  }

  getLstProductos(id : String){
    return this.http.get<string[]> (this.Url + "Srvmp04302/" + id);
  }

  getLstSubProductos(id : String){
    return this.http.get<string[]> (this.Url + "Srvmp04303/" + id);
  }

  getFindProductos(id : String){
    return this.http.get<Producto[]> (this.Url + "FindProductos/" + id);
  }

  
}
