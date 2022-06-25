import { Component, OnInit } from '@angular/core';
import {UsersService,User} from '../../SERVICES/users.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponentUser implements OnInit {

  users: User={
    idUser:'',
    name:'',
    email:'',
    password:'',
    fotografia:''
  }

  constructor(private UsersService: UsersService, private router:Router) { }

  ngOnInit(): void {
  }

  agregar(){

    this.UsersService.addUsers(this.users).subscribe();

    this.router.navigate(['/inicioUsers']);
  }


}
