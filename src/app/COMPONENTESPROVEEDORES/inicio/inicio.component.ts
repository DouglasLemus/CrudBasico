import { Component, OnInit } from '@angular/core';
import {ProveedoresService, Proveedor} from '../../SERVICES/proveedores.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponentProveedor implements OnInit {
  //variable
  ListarProveedores: Proveedor[] | undefined;

  constructor(private ProveedoresService:ProveedoresService, private router:Router) { }

  ngOnInit(): void {
    this.listarProveedor();
  }

listarProveedor(){
  this.ProveedoresService.getProveedor().subscribe(
    res=>{
      console.log(res)
      this.ListarProveedores=<any>res;
    },
    err => console.log(err)
  );
}

eliminar(id:string){
  this.ProveedoresService.deleteProveedor(id).subscribe(
    res=>{
      console.log('Proveedor eliminado');
      this.listarProveedor();
    },
    err=> console.log(err)
  );
}

modificar(id:string){
  this.router.navigate(['/editProveedor/'+id]);
}

}
