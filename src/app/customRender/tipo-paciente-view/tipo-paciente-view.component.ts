import { Component, OnInit, Input, Output } from '@angular/core';
import { ViewCell } from 'ng2-smart-table/components/cell/cell-view-mode/view-cell';
import { DataService } from '../../data/data.service';


@Component({
  selector: 'app-tipo-paciente-view',
  templateUrl: './tipo-paciente-view.component.html',
  styleUrls: ['./tipo-paciente-view.component.scss']
})
export class TipoPacienteViewComponent implements ViewCell, OnInit {

  renderValue: string;
  color: string;
  
  @Input() value: string;
  @Input() rowData: any;

  constructor(private data:DataService) {}

  ngOnInit() {
    this.renderValue = this.data.tipoPaciente[this.value].nombre;
    this.color = this.data.tipoPaciente[this.value].color;
  }

}
