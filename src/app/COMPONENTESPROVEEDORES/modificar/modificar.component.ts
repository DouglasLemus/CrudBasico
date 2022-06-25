import { Component, OnInit } from '@angular/core';
import {ProveedoresService, Proveedor} from '../../SERVICES/proveedores.service'
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponentProveedor implements OnInit {

  proveedor : Proveedor={
    idProveedor:'',
    descripcion:'',
    numeroTelefono:'',
    correoelectronico:'',
    personacontacto:'',
    logo:''
  };

  constructor(private ProveedoresService:ProveedoresService, private router:Router,private activatedRoute:ActivatedRoute) { }


  ngOnInit(): void {
    const id_entrada = <string>this.activatedRoute.snapshot.params['id'];

    console.log("Id de entrada " + id_entrada);

    if(id_entrada){
      this.ProveedoresService.getUnProveedor(id_entrada).subscribe(
        res=>{
          this.proveedor = res[0] ;
          console.log(this.proveedor.idProveedor + "Este es el id")
        },
        err=>console.log(err)
      );
    }
  }

  modificar(){
    this.ProveedoresService.editProveedor(this.proveedor.idProveedor,this.proveedor).subscribe(
      res=>{
        
        console.log(res)
      },
      err=>console.log(err)
    );
    
    this.router.navigate(['/inicioProveedores']);
  }

}
