import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EmpleadosService {

  url='/empleados';

  constructor(private http: HttpClient) { }

  //get Empleados
  getEmpleados(){
    return this.http.get(this.url);
  }

  //get un Empleados
  getUnEmpleados(id:string){
    return this.http.get<Empleados[]>(this.url+'/'+id);
  }

  //agregar Empleados
  addEmpleados(empleados:Empleados){
    return this.http.post(this.url,empleados);
  }

  //eliminar
  deleteEmpleados(id:string){
    return this.http.delete(this.url+'/'+id);
  }

  //modificar
  editEmpleados(id:string, empleados:Empleados){
    return this.http.put(this.url+'/'+id,empleados);
  }

}

export interface Empleados{
  idEmpleado:string;
  idRol?:string;
  nombre?:string;
  apellido?:string;
  numeroTelefono?:string;
  tipoDeSangre?:string;
  fotografia:string;
}
