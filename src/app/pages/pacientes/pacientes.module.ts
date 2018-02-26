import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { PacientesComponent } from './pacientes.component';
import { PacienteComponent } from './paciente/paciente.component';

@NgModule({
  imports: [
    ThemeModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    PacientesComponent,
    PacienteComponent,
  ],
})
export class PacientesModule { }
