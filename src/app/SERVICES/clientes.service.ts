import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  url='/clientes';

  constructor(private http: HttpClient) { }

  //get Clientes
  getClientes(){
    return this.http.get(this.url);
  }

  //get un Clientes
  getUnClientes(id:string){
    return this.http.get<Cliente[]>(this.url+'/'+id);
  }

  //agregar Clientes
  addClientes(Clientes:Cliente){
    return this.http.post(this.url,Clientes);
  }

  //eliminar
  deleteClientes(id:string){
    return this.http.delete(this.url+'/'+id);
  }

  //modificar
  editClientes(id:string, Clientes:Cliente){
    return this.http.put(this.url+'/'+id,Clientes);
  }

}

export interface Cliente{
  idCliente:string;
  nombre?:string;
  apellido?:string;
  direccion?:string;
  nit?:string;
  telefono?:string;
  email?:string;
}
