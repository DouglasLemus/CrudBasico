import { Component, OnInit } from '@angular/core';
import {UsersService,User} from '../../SERVICES/users.service'
import {ActivatedRoute, Router} from '@angular/router'
@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponentUser implements OnInit {

  users: User={
    idUser:'',
    name:'',
    email:'',
    password:'',
    fotografia:''
  }

  constructor(private UsersService:UsersService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const id_entrada = <string>this.activatedRoute.snapshot.params['id'];

    if(id_entrada){
      this.UsersService.getUnUsers(id_entrada).subscribe(
        res=>{
          this.users = res[0];
          console.log(res[0]);
          
        },
        err=>console.log(err)
      )
    }
  }

  modificar(){
    this.UsersService.editUsers(this.users.idUser, this.users).subscribe(
      res=>{
        console.log(res);
      },
      err=>console.log(err)
    )

    this.router.navigate(['/inicioUsers'])
  }

}
