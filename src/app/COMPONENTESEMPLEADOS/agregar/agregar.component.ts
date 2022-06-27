import { Component, OnInit } from '@angular/core';
import {EmpleadosService,Empleados} from '../../SERVICES/empleados.service'
import {Router} from '@angular/router'
import {RolService,Rol} from '../../SERVICES/rol.service'
import {ContactoEmergenciaService, Contacto} from '../../SERVICES/contacto-emergencia.service'

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponentEmpleados implements OnInit {

  ListarRol: Rol[] | undefined;
  ListarContactoEmergencia: Contacto[] | undefined;

  empleado: Empleados={
    idEmpleado:'',
    nombre:'',
    apellido:'',
    numeroTelefono:'',
    tipoDeSangre:'',
    fotografia:'',
    idContactoEmergencia:''
  }

  constructor(private EmpleadosService : EmpleadosService, private router:Router, private RolService:RolService, private ContactoService:ContactoEmergenciaService) { }

  ngOnInit(): void {
    this.listarRol();
    this.listarContacto();
  }

  listarContacto(){
    this.ContactoService.getContacto().subscribe(
      res=>{
        console.log(res);
        this.ListarContactoEmergencia=<any>res;
      },
      err => console.log(err)
    )

  }

  listarRol(){
    this.RolService.getRol().subscribe(
      res=>{
        console.log(res);
        this.ListarRol=<any>res;
      },
      err => console.log(err)
    )
  }

  agregar(){
    this.EmpleadosService.addEmpleados(this.empleado).subscribe();

    this.router.navigate(['/inicioEmpleados'])
  }

}
