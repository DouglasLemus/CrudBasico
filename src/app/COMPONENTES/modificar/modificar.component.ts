import { Component, OnInit } from '@angular/core';
import {Equipo, EquipoService} from '../../SERVICES/equipo.service';
import {Router, ActivatedRoute} from '@angular/router'; 


@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  equipo: Equipo={
    idMaquina: ' ',
    descripcion: ' ',
    logo: ' '
  };

  constructor(private EquipoService:EquipoService,
              private router:Router,
              private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const id_entrada = <string>this.activatedRoute.snapshot.params['id'];
    
    console.log('id de entrada: '+id_entrada);
    

    

    if(id_entrada){
      this.EquipoService.getUnEquipo(id_entrada).subscribe(
        res=>{
          this.equipo = res[0];
          console.log(res[0]);
          
        },
        err=>console.log(err)
      );
    }
  }

  modificar()
  {

    this.EquipoService.editEquipo(this.equipo.idMaquina, this.equipo).subscribe(
      res=>{
        console.log(res);
      },
      err=>console.log(err)
    );

    this.router.navigate(['/inicio']);
  }

}
