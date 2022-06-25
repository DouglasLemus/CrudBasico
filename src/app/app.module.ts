import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './COMPONENTES/inicio/inicio.component';
import { AgregarComponent } from './COMPONENTES/agregar/agregar.component';
import { ModificarComponent } from './COMPONENTES/modificar/modificar.component';
import { InicioComponentProveedor } from './COMPONENTESPROVEEDORES/inicio/inicio.component';
import { AgregarComponentProveedor } from './COMPONENTESPROVEEDORES/agregar/agregar.component';
import { ModificarComponentProveedor } from './COMPONENTESPROVEEDORES/modificar/modificar.component';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { InicioComponentEmpleados } from './COMPONENTESEMPLEADOS/inicio/inicio.component';
import { AgregarComponentEmpleados } from './COMPONENTESEMPLEADOS/agregar/agregar.component';
import { ModificarComponentEmpleados } from './COMPONENTESEMPLEADOS/modificar/modificar.component';
import { InicioComponentUser } from './COMPONENTESUSER/inicio/inicio.component';
import { AgregarComponentUser } from './COMPONENTESUSER/agregar/agregar.component';
import { ModificarComponentUser } from './COMPONENTESUSER/modificar/modificar.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AgregarComponent,
    ModificarComponent,
    InicioComponentProveedor,
    AgregarComponentProveedor,
    ModificarComponentProveedor,
    InicioComponentEmpleados,
    AgregarComponentEmpleados,
    ModificarComponentEmpleados,
    InicioComponentUser,
    AgregarComponentUser,
    ModificarComponentUser
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
