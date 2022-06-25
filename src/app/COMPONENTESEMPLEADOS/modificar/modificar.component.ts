import { Component, OnInit } from '@angular/core';
import {EmpleadosService,Empleados} from '../../SERVICES/empleados.service'
import {ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})

export class ModificarComponentEmpleados implements OnInit {

  empleados: Empleados={
    idEmpleado:'',
    nombre:'',
    apellido:'',
    numeroTelefono:'',
    tipoDeSangre:'',
    fotografia:''
  }

  constructor(private EmpleadosService:EmpleadosService,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const id_entrada = <string>this.activatedRoute.snapshot.params['id'];

    console.log('id de entrada: '+id_entrada);


     if(id_entrada){
      this.EmpleadosService.getUnEmpleados(id_entrada).subscribe(
        res=>{
          this.empleados = res[0];
          console.log(res[0]);
          
        },
        err=>console.log(err)
      );
    }
  }

  modificar()
  {

    this.EmpleadosService.editEmpleados(this.empleados.idEmpleado, this.empleados).subscribe(
      res=>{
        console.log(res);
      },
      err=>console.log(err)
    );

    this.router.navigate(['/inicioEmpleados']);
  }

}
