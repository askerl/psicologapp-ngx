import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DataService } from '../../../data/data.service';
import { CONSTANTS } from '../../../data/constants';
import * as moment from 'moment';

@Component({
  selector: 'ngx-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.scss'],
})
export class PacienteComponent implements OnInit {

  readonly CONSTANTS = CONSTANTS;

  id;
  nuevo: boolean = true;
  paciente: any = {};
  tipoPaciente: any[];
  prepagas: any[];

  toggle: any = {
    onColor: 'primary',
    offColor: 'secondary',
    onText: 'On',
    offText: 'Off',
    disabled: false,
    size: '',
    value: null
  };

  constructor(private route: ActivatedRoute, private location: Location, private data: DataService) {

  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.nuevo = this.id === 'new';
    this.tipoPaciente = this.data.getFiltroTipoPaciente();
    this.prepagas = this.data.getFiltroPrepaga();
    if (!this.nuevo) {
      this.data.getPaciente(this.id).subscribe(
        (pac: any) => {
          this.loadPaciente(pac);
          // console.log('Paciente', this.paciente);
      });
    } else {
      // inicializo datos de paciente nuevo
      this.paciente = {
        activo: true,
        tipo: '',
        prepaga: '',
        facturaPrepaga: true
      }
    }
  }

  loadPaciente(p) {
    this.paciente = p;
    p.fchNac = moment(p.fchNac, 'DD/MM/YYYY').format('YYYY-MM-DD');
  }

  goBack() {
    this.location.back();
  }

}
