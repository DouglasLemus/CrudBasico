import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  url='/proveedores';

  constructor(private http:HttpClient) { }

  //getProveedor
  getProveedor(){
    return this.http.get(this.url)
  }

  //getProveedor
  getUnProveedor(id:string){
    return this.http.get<Proveedor[]>(this.url+'/'+id)
  }

  //agregar un proveedor
  addProveedor(proveedor:Proveedor){
    return this.http.post(this.url,proveedor);
  }

  //eliminar un proveedor
  deleteProveedor(id:string){
    return this.http.delete(this.url+'/'+id)
  }

  //modificar un proveedor
  editProveedor(id:string,proveedor:Proveedor){
    return this.http.put(this.url+'/'+id,proveedor);
  }


}

export interface Proveedor{
  idProveedor:string,
  descripcion?:string,
  numeroTelefono?:string,
  correoelectronico?:string,
  personacontacto?:string,
  logo?:string
}
