import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  url='/rol';

  constructor(private http: HttpClient) { }

    //get rol
    getRol(){
      return this.http.get(this.url);
    }

      //get un rol
  getUnRol(id:string){
    return this.http.get<Rol[]>(this.url+'/'+id);
  }
}


export interface Rol{
  idRol:string;
  descripcionPuesto?:string;
  accesos?:string;
}

