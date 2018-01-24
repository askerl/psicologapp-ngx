import { Component, OnInit, Input } from '@angular/core';
import { ViewCell } from 'ng2-smart-table/components/cell/cell-view-mode/view-cell';
import { CONSTANTS } from '../../data/constants';

@Component({
  selector: 'ngx-tipo-paciente-view',
  templateUrl: './tipo-paciente-view.component.html',
  styleUrls: ['./tipo-paciente-view.component.scss'],
})
export class TipoPacienteViewComponent implements ViewCell, OnInit {

  renderValue: string;
  color: string;

  @Input() value: string;
  @Input() rowData: any;

  constructor() { }

  ngOnInit() {
    this.renderValue = CONSTANTS.tipoPaciente[this.value].nombre;
    this.color = CONSTANTS.tipoPaciente[this.value].color;
  }

}
