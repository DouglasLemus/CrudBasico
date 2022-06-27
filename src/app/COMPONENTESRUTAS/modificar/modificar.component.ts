import { Component, OnInit } from '@angular/core';
import {RutasTransporteService, Rutas} from '../../SERVICES/rutas-transporte.service'
import {Router, ActivatedRoute} from '@angular/router'
import {EquipoService, Equipo} from '../../SERVICES/equipo.service'

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponentRutas implements OnInit {
//variable
ListarEquipo:Equipo[] | undefined;

  rutas: Rutas={
    idRuta:"",
    direccionOrigen:"",
    direcciondestino:"",
    idMaquina:"",
    costoRuta:""
  }

  constructor(private RutasService: RutasTransporteService, private router:Router, private activatedRoute:ActivatedRoute, private EquipoService:EquipoService) { }

  ngOnInit(): void {

    this.listarEquipo();

    const id_entrada = <string>this.activatedRoute.snapshot.params['id'];
    
    console.log('id de entrada: '+id_entrada);
    

    

    if(id_entrada){
      this.RutasService.getUnRutas(id_entrada).subscribe(
        res=>{
          this.rutas = res[0];
          console.log(res[0]);
          
        },
        err=>console.log(err)
      );
    }
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

  modificar()
  {

    this.RutasService.editRutas(this.rutas.idRuta, this.rutas).subscribe(
      res=>{
        console.log(res);
      },
      err=>console.log(err)
    );

    this.router.navigate(['/inicioRutas']);
  }

}