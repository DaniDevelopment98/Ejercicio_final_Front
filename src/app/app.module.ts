import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// lo que hace import es dar a conocer nuestra clase que nosotros creamos, dandole por específico la ruta, para luego exportar la clase que nosotros creamos

import { EmpleadoComponent } from './empleado/empleado.component';
import { ClientesComponent } from './clientes/clientes.component';



@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    ClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
