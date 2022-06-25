import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './COMPONENTES/agregar/agregar.component';
import { InicioComponent } from './COMPONENTES/inicio/inicio.component';
import { ModificarComponent } from './COMPONENTES/modificar/modificar.component';
import { AgregarComponentEmpleados } from './COMPONENTESEMPLEADOS/agregar/agregar.component';
import { InicioComponentEmpleados } from './COMPONENTESEMPLEADOS/inicio/inicio.component';
import { ModificarComponentEmpleados } from './COMPONENTESEMPLEADOS/modificar/modificar.component';
import { AgregarComponentProveedor } from './COMPONENTESPROVEEDORES/agregar/agregar.component';
import { InicioComponentProveedor } from './COMPONENTESPROVEEDORES/inicio/inicio.component';
import { ModificarComponentProveedor } from './COMPONENTESPROVEEDORES/modificar/modificar.component';
import { AgregarComponentUser } from './COMPONENTESUSER/agregar/agregar.component';
import { InicioComponentUser } from './COMPONENTESUSER/inicio/inicio.component';
import { ModificarComponentUser } from './COMPONENTESUSER/modificar/modificar.component';


const routes: Routes = [
  {path:'',redirectTo:'/inicio',pathMatch:'full'},
  {path:'inicio',component: InicioComponent},
  {path:'add',component:AgregarComponent},
  {path:'edit/:id',component:ModificarComponent},
  {path:'inicioProveedores',component:InicioComponentProveedor},
  {path:'addProveedor',component:AgregarComponentProveedor},
  {path:'editProveedor/:id',component:ModificarComponentProveedor},
  {path:'inicioEmpleados',component:InicioComponentEmpleados},
  {path:'addEmpleados',component:AgregarComponentEmpleados},
  {path:'editEmpleados/:id',component:ModificarComponentEmpleados},
  {path:'inicioUsers',component:InicioComponentUser},
  {path:'addUsers',component:AgregarComponentUser},
  {path:'editUsers/:id',component:ModificarComponentUser}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
