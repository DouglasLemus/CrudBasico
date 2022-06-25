import { Component, OnInit } from '@angular/core';
import {Equipo, EquipoService} from '../../SERVICES/equipo.service';
import {Router} from '@angular/router';
import {Proveedor,ProveedoresService} from '../../SERVICES/proveedores.service'

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  //variable
  ListarProveedores: Proveedor[] | undefined;

  equipo: Equipo={
    idMaquina:'',
    descripcion:'',
    logo:'',
    costoHora:'',
    cantidadDisponible:'',
    costoHoraOperador:'',
    horasdeUso:'',
    estado:'',
    costoVenta:'',
    idProveedor:''
  }
    
  constructor(private EquipoService:EquipoService, private router:Router, private ProveedoresService:ProveedoresService) { }

  ngOnInit(): void {
    this.listarProveedores();
  }

  listarProveedores(){
    this.ProveedoresService.getProveedor().subscribe(
      res=>{
        console.log(res);
        this.ListarProveedores=<any>res;
      },
      err => console.log(err)
    )
  }

  agregar(){

    this.EquipoService.addEquipo(this.equipo).subscribe();

    this.router.navigate(['/inicio']);
  }

}
