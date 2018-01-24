import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data/data.service';
import { TipoPacienteViewComponent } from '../../customRender/tipo-paciente-view/tipo-paciente-view.component';
import { LocalDataSource } from 'ng2-smart-table/lib/data-source/local/local.data-source';
import { SesionesRestantesViewComponent } from '../../customRender/sesiones-restantes-view/sesiones-restantes-view.component';

@Component({
  selector: 'ngx-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss'],
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
        filter: {
          type: 'list',
          config: {
            selectText: 'Todos',
            list: this.data.getFiltroTipoPaciente(),
          },
        },
      },
      prepaga: {
        title: 'Prepaga',
        type: 'string',
        valuePrepareFunction: (value) => value ? this.data.getNombrePrepaga(value) : '',
        filter: {
          type: 'list',
          config: {
            selectText: 'Todas',
            list: this.data.getFiltroPrepaga(),
          },
        },
      },
      credencial: {
        title: 'Credencial',
        type: 'string',
      },
      sesionesRestantes: {
        title: 'Sesiones restantes',
        type: 'custom',
        renderComponent: SesionesRestantesViewComponent,
      },
    },
  };

  pacientes = [];

  source: LocalDataSource;

  constructor(private data: DataService) {
    this.source = new LocalDataSource(this.pacientes);
  }

  ngOnInit() {

    this.data.getPacientes();
    this.data.pacientes.subscribe(
      (pac: any[]) => {
        this.pacientes = pac;
        this.source.load(this.pacientes);
    });

  }

}
