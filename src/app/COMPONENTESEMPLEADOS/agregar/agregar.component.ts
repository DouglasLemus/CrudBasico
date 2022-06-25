import { Component, OnInit } from '@angular/core';
import {EmpleadosService,Empleados} from '../../SERVICES/empleados.service'
import {Router} from '@angular/router'
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponentEmpleados implements OnInit {

  empleado: Empleados={
    idEmpleado:'',
    nombre:'',
    apellido:'',
    numeroTelefono:'',
    tipoDeSangre:'',
    fotografia:''
  }

  constructor(private EmpleadosService : EmpleadosService, private router:Router) { }

  ngOnInit(): void {
  }

  agregar(){
    this.EmpleadosService.addEmpleados(this.empleado).subscribe();

    this.router.navigate(['/inicioEmpleados'])
  }

}
