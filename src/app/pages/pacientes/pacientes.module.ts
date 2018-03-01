import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { PacientesComponent } from './pacientes.component';
import { PacienteComponent } from './paciente/paciente.component';
import { NgxToggleModule } from 'ngx-toggle';
import { SesionesCardComponent } from './sesiones-card/sesiones-card.component';

@NgModule({
  imports: [
    ThemeModule,
    Ng2SmartTableModule,
    NgxToggleModule
  ],
  declarations: [
    PacientesComponent,
    PacienteComponent,
    SesionesCardComponent
  ],
})
export class PacientesModule { }
