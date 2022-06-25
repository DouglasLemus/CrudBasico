import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  url='/user';

  constructor(private http: HttpClient) { }

  //get Users
  getUsers(){
    return this.http.get(this.url);
  }

  //get un Users
  getUnUsers(id:string){
    return this.http.get<User[]>(this.url+'/'+id);
  }

  //agregar Users
  addUsers(Users:User){
    return this.http.post(this.url,Users);
  }

  //eliminar
  deleteUsers(id:string){
    return this.http.delete(this.url+'/'+id);
  }

  //modificar
  editUsers(id:string, Users:User){
    return this.http.put(this.url+'/'+id,Users);
  }

}

export interface User{
  idUser:string;
  name?:string;
  email?:string;
  password?:string;
  fotografia?:string;
}
