import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EquipoService {

  url='/maquinas';

  constructor(private http: HttpClient) { }

  //get equipos
  getEquipos(){
    return this.http.get(this.url);
  }

  //get un equipo
  getUnEquipo(id:string){
    return this.http.get<Equipo[]>(this.url+'/'+id);
  }

  //agregar equipo
  addEquipo(equipo:Equipo){
    return this.http.post(this.url,equipo);
  }

  //eliminar
  deleteEquipo(id:string){
    return this.http.delete(this.url+'/'+id);
  }

  //modificar
  editEquipo(id:string, equipo:Equipo){
    return this.http.put(this.url+'/'+id,equipo);
  }

}

export interface Equipo{
  idMaquina:string;
  descripcion?:string;
  logo?:string;
  costoHora?:string;
  cantidadDisponible?:string;
  costoHoraOperador?:string;
  horasdeUso?:string;
  estado?:string;
  costoVenta?:string;
  idProveedor?:string;
}
