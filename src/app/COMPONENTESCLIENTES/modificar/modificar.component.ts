import { Component, OnInit } from '@angular/core';
import {ClientesService, Cliente} from '../../SERVICES/clientes.service'
import {Router, ActivatedRoute} from '@angular/router'; 

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponentClientes implements OnInit {

  cliente: Cliente={
    idCliente:"",
    direccion:"",
    telefono:""
  }

  constructor(private ClienteService:ClientesService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const id_entrada = <string>this.activatedRoute.snapshot.params['id'];
    
    console.log('id de entrada: '+id_entrada);
    
    if(id_entrada){
      this.ClienteService.getUnClientes(id_entrada).subscribe(
        res=>{
          this.cliente = res[0];
          console.log(res[0]);
          
        },
        err=>console.log(err)
      );
    }
  }

  modificar()
  {

    this.ClienteService.editClientes(this.cliente.idCliente, this.cliente).subscribe(
      res=>{
        console.log(res);
      },
      err=>console.log(err)
    );

    this.router.navigate(['/inicioClientes']);
  }


}
