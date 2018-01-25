import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data/data.service';
import { TipoPacienteViewComponent } from '../../customRender/tipo-paciente-view/tipo-paciente-view.component';
import { LocalDataSource } from 'ng2-smart-table/lib/data-source/local/local.data-source';
import { SesionesRestantesViewComponent } from '../../customRender/sesiones-restantes-view/sesiones-restantes-view.component';
import { CONSTANTS } from '../../data/constants';
import { NombrePacienteViewComponent } from '../../customRender/nombre-paciente-view/nombre-paciente-view.component';

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
      columnTitle: ''
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
        type: 'custom',
        renderComponent: NombrePacienteViewComponent,
      },
      edad: {
        title: 'Edad',
        type: 'number',
        width: '30px',
        valuePrepareFunction: (value) => value > 0 ? value : '',
      },
      tipo: {
        title: 'Tipo',
        type: 'custom',
        width: '130px',
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
        width: '130px',
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
      }
    },
  };

  pacientes = [];
  estados = CONSTANTS.estados;
  estado: any;

  source: LocalDataSource;

  constructor(private data: DataService) {
    this.source = new LocalDataSource();
  }

  ngOnInit() {
    this.estado = this.estados[0];
    this.loadData();
  }

  loadData() {
    this.data.getPacientes(this.estado.value);
    this.data.pacientes.subscribe(
      (pac: any[]) => {
        this.pacientes = pac;
        this.source.load(this.pacientes);
    });
  }

  onClickEstado(e) {
    if (this.estado.value !== e.value) {
      this.estado = e;
      this.loadData();
    }
  }

}
