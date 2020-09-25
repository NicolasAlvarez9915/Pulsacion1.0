import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonaConsultaComponent } from './pulsacion/persona-consulta/persona-consulta.component';
import { RouterModule, Routes } from '@angular/router';
import { PersonaRegistroComponent } from './pulsacion/persona-registro/persona-registro.component';

const routes: Routes = [
  { path: 'Consulta', component: PersonaConsultaComponent },
  { path: 'Registro', component: PersonaRegistroComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
