import { Component, OnInit, Input } from '@angular/core';
import { ViewCell } from 'ng2-smart-table/components/cell/cell-view-mode/view-cell';

@Component({
  selector: 'ngx-nombre-paciente-view',
  templateUrl: './nombre-paciente-view.component.html',
  styleUrls: ['./nombre-paciente-view.component.scss']
})
export class NombrePacienteViewComponent implements ViewCell, OnInit {

  activo: boolean;

  @Input() value: string;
  @Input() rowData: any;

  constructor() { }

  ngOnInit() {
    this.activo = this.rowData.activo;
  }

}
