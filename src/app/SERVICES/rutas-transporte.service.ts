import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RutasTransporteService {

  url='/rutas';

  constructor(private http: HttpClient) { }

  //get Rutas
  getRutas(){
    return this.http.get(this.url);
  }

  //get un Rutas
  getUnRutas(id:string){
    return this.http.get<Rutas[]>(this.url+'/'+id);
  }

  //agregar Rutas
  addRutas(Rutas:Rutas){
    return this.http.post(this.url,Rutas);
  }

  //eliminar
  deleteRutas(id:string){
    return this.http.delete(this.url+'/'+id);
  }

  //modificar
  editRutas(id:string, Rutas:Rutas){
    return this.http.put(this.url+'/'+id,Rutas);
  }

}

export interface Rutas{
  idRuta:string;
  descripcion?:string;
  direccionOrigen?:string;
  direcciondestino?:string;
  idMaquina?:string;
  costoRuta?:string;
}
