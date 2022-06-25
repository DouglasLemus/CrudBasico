import { Component, OnInit } from '@angular/core';
import { EmpleadosService, Empleados } from 'src/app/SERVICES/empleados.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponentEmpleados implements OnInit {

  ListarEmpleados: Empleados[] | undefined;

  constructor(private EmpleadosService : EmpleadosService, private router:Router) { }

  ngOnInit(): void {
    this.listarEmpleados();
  }

  listarEmpleados(){
    this.EmpleadosService.getEmpleados().subscribe(
      res=>{
        console.log(res);
        this.ListarEmpleados=<any>res;
      },
      err => console.log(err)
    );
  }

  eliminar(id:string)
  {
    this.EmpleadosService.deleteEmpleados(id).subscribe(
      res=>{
        console.log('Empleado eliminado');
        this.listarEmpleados();
      },
      err=> console.log(err)
      );
  }

  modificar(id:string){
    this.router.navigate(['/editEmpleados/'+id]);
  }

}
