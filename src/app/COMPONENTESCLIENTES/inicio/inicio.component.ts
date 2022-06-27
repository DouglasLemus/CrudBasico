import { Component, OnInit } from '@angular/core';
import {ClientesService,Cliente} from '../../SERVICES/clientes.service'
import { Router} from '@angular/router';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponentClientes implements OnInit {
  ListarClientes: Cliente[] | undefined;

  constructor(private ClienteService:ClientesService, private router:Router) { }

  ngOnInit(): void {
    this.listarCliente();
  }

  listarCliente(){
    this.ClienteService.getClientes().subscribe(
      res=>{
        console.log(res);
        this.ListarClientes=<any>res;
      },
      err => console.log(err)
    );
  }

  eliminar(id:string)
  {
    this.ClienteService.deleteClientes(id).subscribe(
      res=>{
        console.log('equipo eliminado');
        this.listarCliente();
      },
      err=> console.log(err)
      );
  }

  modificar(id:string){
    this.router.navigate(['/editClientes/'+id]);
  }


}
