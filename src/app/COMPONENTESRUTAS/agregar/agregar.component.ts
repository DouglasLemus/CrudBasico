import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import {RutasTransporteService, Rutas} from '../../SERVICES/rutas-transporte.service'
import {EquipoService, Equipo} from '../../SERVICES/equipo.service'

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponentRutas implements OnInit {

  //variable
  ListarEquipo:Equipo[] | undefined;

  rutas: Rutas={
    idRuta:"",
    descripcion:"",
    direccionOrigen:"",
    direcciondestino:"",
    idMaquina:"",
    costoRuta:""
  }

  constructor(private RutasService: RutasTransporteService, private router:Router, private EquipoService:EquipoService) { }

  ngOnInit(): void {
    this.listarEquipo();
  }

  listarEquipo(){
    this.EquipoService.getEquipos().subscribe(
      res=>{
        console.log(res);
        this.ListarEquipo=<any>res;
      },
      err => console.log(err)
    )  
  }

  agregar(){

    this.RutasService.addRutas(this.rutas).subscribe();

    this.router.navigate(['/inicioRutas']);
  }


}
