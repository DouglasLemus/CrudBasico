import { Component, OnInit } from '@angular/core';
import {RutasTransporteService, Rutas} from '../../SERVICES/rutas-transporte.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponentRutas implements OnInit {

  ListarRutas: Rutas[] | undefined;

  constructor(private RutasService: RutasTransporteService, private router:Router) { }

  ngOnInit(): void {
    this.listarRutas();
  }

  listarRutas(){
    this.RutasService.getRutas().subscribe(
      res=>{
        console.log(res);
        this.ListarRutas=<any>res;
      },
      err => console.log(err)
    );
  }

  eliminar(id:string)
  {
    this.RutasService.deleteRutas(id).subscribe(
      res=>{
        console.log('equipo eliminado');
        this.listarRutas();
      },
      err=> console.log(err)
      );
  }

  modificar(id:string){
    this.router.navigate(['/editRutas/'+id]);
  }

}
