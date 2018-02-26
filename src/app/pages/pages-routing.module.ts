import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { PacienteComponent } from './pacientes/paciente/paciente.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'inicio',
    component: DashboardComponent,
  },
  {
    path: 'pacientes',
    component: PacientesComponent,
  },
  {
    path: 'pacientes/paciente/:id',
    component: PacienteComponent,
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
