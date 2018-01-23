import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data/data.service';
import { Observable } from 'rxjs/Observable';
import { TipoPacienteViewComponent } from '../../customRender/tipo-paciente-view/tipo-paciente-view.component';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent implements OnInit {

  settings = {
    mode: 'external',
    actions: {
      delete: false,
      columnTitle: 'Acciones',
    },
    noDataMessage: 'No hay datos ingresados',
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
    },
    pager: {
      display: false,
    },
    columns: {
      nombreCompleto: {
        title: 'Paciente',
        type: 'string',
      },
      tipo: {
        title: 'Tipo',
        type: 'custom',
        renderComponent: TipoPacienteViewComponent,
      },
      prepaga: {
        title: 'Prepaga',
        type: 'string',
        valuePrepareFunction: (value) => { return value ? this.data.prepagasById[value].nombre : '' },
      },
      credencial: {
        title: 'Credencial',
        type: 'string',
      },
      sesionesRestantes: {
        title: 'Sesiones restantes',
        type: 'number',
      },
    },
  };

  pacientes = [];

  constructor(private data: DataService) {
    
  }

  ngOnInit() {

    this.data.getPacientes();
    this.data.pacientes.subscribe(
      (pac: any[]) => this.pacientes = pac
    );

  }

}
