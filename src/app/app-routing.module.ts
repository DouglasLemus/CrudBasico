import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './COMPONENTES/agregar/agregar.component';
import { InicioComponent } from './COMPONENTES/inicio/inicio.component';
import { ModificarComponent } from './COMPONENTES/modificar/modificar.component';
import { AgregarComponentClientes } from './COMPONENTESCLIENTES/agregar/agregar.component';
import { InicioComponentClientes } from './COMPONENTESCLIENTES/inicio/inicio.component';
import { ModificarComponentClientes } from './COMPONENTESCLIENTES/modificar/modificar.component';
import { InicioComponentConstruccion } from './COMPONENTESCONSTRUCCION/inicio/inicio.component';
import { AgregarComponentEmpleados } from './COMPONENTESEMPLEADOS/agregar/agregar.component';
import { InicioComponentEmpleados } from './COMPONENTESEMPLEADOS/inicio/inicio.component';
import { ModificarComponentEmpleados } from './COMPONENTESEMPLEADOS/modificar/modificar.component';
import { InicioComponentMinera } from './COMPONENTESMINERA/inicio/inicio.component';
import { AgregarComponentProveedor } from './COMPONENTESPROVEEDORES/agregar/agregar.component';
import { InicioComponentProveedor } from './COMPONENTESPROVEEDORES/inicio/inicio.component';
import { ModificarComponentProveedor } from './COMPONENTESPROVEEDORES/modificar/modificar.component';
import { AgregarComponentRutas } from './COMPONENTESRUTAS/agregar/agregar.component';
import { InicioComponentRutas } from './COMPONENTESRUTAS/inicio/inicio.component';
import { ModificarComponentRutas } from './COMPONENTESRUTAS/modificar/modificar.component';
import { InicioComponentTransporte } from './COMPONENTESTRANSPORTE/inicio/inicio.component';
import { AgregarComponentUser } from './COMPONENTESUSER/agregar/agregar.component';
import { InicioComponentUser } from './COMPONENTESUSER/inicio/inicio.component';
import { ModificarComponentUser } from './COMPONENTESUSER/modificar/modificar.component';
import { InicioComponentVentaMaquinas } from './COMPONENTESVENTAMAQUINAS/inicio/inicio.component';


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
  {path:'editUsers/:id',component:ModificarComponentUser},
  {path:'inicioTransportes',component:InicioComponentTransporte},
  {path:'inicioConstruccion',component:InicioComponentConstruccion},
  {path:'inicioMinera',component:InicioComponentMinera},
  {path:'inicioVentas',component:InicioComponentVentaMaquinas},
  {path:'inicioClientes',component:InicioComponentClientes},
  {path:'addClientes',component:AgregarComponentClientes},
  {path:'editClientes/:id',component:ModificarComponentClientes},
  {path:'inicioRutas',component:InicioComponentRutas},
  {path:'addRutas',component:AgregarComponentRutas},
  {path:'editRutas/:id',component:ModificarComponentRutas},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
