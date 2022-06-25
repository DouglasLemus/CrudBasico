import { Component, OnInit } from '@angular/core';
import { UsersService,User } from 'src/app/SERVICES/users.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponentUser implements OnInit {
  
  //varibale
  ListarUsers: User[] | undefined;
  

  constructor(private UsersService : UsersService, private router:Router) { }

  ngOnInit(): void {
    this.listarUsers();
  }

  listarUsers(){
    this.UsersService.getUsers().subscribe(
      res=>{
        console.log(res);
        this.ListarUsers=<any>res;
      },
      err => console.log(err)
    );
  }

  eliminar(id:string)
  {
    this.UsersService.deleteUsers(id).subscribe(
      res=>{
        console.log('equipo eliminado');
        this.listarUsers();
      },
      err=> console.log(err)
      );
  }

  modificar(id:string){
    this.router.navigate(['/editUsers/'+id]);
  }

}
