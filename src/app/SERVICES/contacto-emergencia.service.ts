import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactoEmergenciaService {

  url='/contactoemergencia';

  constructor(private http: HttpClient) { }

    //get Contacto
    getContacto(){
      return this.http.get(this.url);
    }
  
    //get un Contacto
    getUnContacto(id:string){
      return this.http.get<Contacto[]>(this.url+'/'+id);
    }

}

export interface Contacto{
  idContactoEmergencia:string;
  nombre?:string;
  apellido?:string;
  numeroTelefono?:string;
}
