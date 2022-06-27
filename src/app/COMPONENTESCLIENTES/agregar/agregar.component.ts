import { Component, OnInit } from '@angular/core';
import {ClientesService, Cliente} from '../../SERVICES/clientes.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponentClientes implements OnInit {

  cliente: Cliente={
    idCliente:"",
    nombre:"",
    apellido:"",
    direccion:"",
    nit:"",
    telefono:"",
    email:""
  }

  constructor(private ClienteService:ClientesService, private router:Router) { }

  ngOnInit(): void {
  }

  agregar(){

    this.ClienteService.addClientes(this.cliente).subscribe();

    this.router.navigate(['/inicioClientes']);
  }

}
