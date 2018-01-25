import { Component, OnInit, Input } from '@angular/core';
import { ViewCell } from 'ng2-smart-table/components/cell/cell-view-mode/view-cell';

@Component({
  selector: 'ngx-sesiones-restantes-view',
  templateUrl: './sesiones-restantes-view.component.html',
  styleUrls: ['./sesiones-restantes-view.component.scss'],
})
export class SesionesRestantesViewComponent implements ViewCell, OnInit {

  type: string;
  porc: string;
  label: string;

  @Input() value: number;
  @Input() rowData: any;

  constructor() { }

  ngOnInit() {
    this.porc = this.rowData.porcRestantes > 0 ? this.rowData.porcRestantes : '100';
    if (this.rowData.porcRestantes > 50) {
      this.type = 'primary';
    } else if (this.rowData.porcRestantes > 10) {
      this.type = 'warning';
    } else {
      this.type = 'danger';
    }
  }

}
