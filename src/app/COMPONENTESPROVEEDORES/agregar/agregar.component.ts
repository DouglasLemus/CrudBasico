import { Component, OnInit } from '@angular/core';
import {ProveedoresService, Proveedor} from '../../SERVICES/proveedores.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponentProveedor implements OnInit {


  Proveedor : Proveedor={
    idProveedor:'',
    descripcion:'',
    numeroTelefono:'',
    correoelectronico:'',
    personacontacto:'',
    logo:''
  };

  constructor(private ProveedoresService:ProveedoresService, private router:Router) { }

  ngOnInit(): void {
  }

  agregar(){
    
    this.ProveedoresService.addProveedor(this.Proveedor).subscribe();

    this.router.navigate(['/inicioProveedores']);
  }

}
