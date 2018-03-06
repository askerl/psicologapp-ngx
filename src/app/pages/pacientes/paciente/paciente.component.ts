import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DataService } from '../../../data/data.service';
import { CONSTANTS } from '../../../data/constants';
import * as moment from 'moment';
import * as _ from 'lodash';

@Component({
  selector: 'ngx-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.scss'],
})
export class PacienteComponent implements OnInit {

  readonly CONSTANTS = CONSTANTS;
  readonly errores = CONSTANTS.errores;

  id;
  nuevo: boolean = true;
  paciente: any = {};
  pacienteDB: any = {};
  tipoPaciente: any[];
  prepagas: any[];
  pagos: any[];
  porcentajes: any = {};
  pacientes: any[] = [];

  toggle: any = {
    onColor: 'primary',
    offColor: 'secondary',
    onText: 'Sí',
    offText: 'No',
    disabled: false,
    size: ''
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
          this.pacienteDB = pac;
          // console.log('Paciente DB', this.pacienteDB);
          this.loadPaciente(pac);
      });
    } else {
      // inicializo datos de paciente nuevo
      this.paciente = {
        activo: true,
        tipo: '',
        prepaga: '',
        pago: ''
      }
    }
    this.data.getPacientes(null);
    this.data.pacientes.subscribe(
      (pac: any[]) => {
        this.pacientes = pac;
    });
  }

  loadPaciente(pac) {
    this.paciente = JSON.parse(JSON.stringify(pac));
    const p = this.paciente;
    const fchNac = moment(p.fchNac, 'DD/MM/YYYY');
    p.fchNac = fchNac.isValid() ? fchNac.format('YYYY-MM-DD') : null;

    if (p.tipo === CONSTANTS.pacientePrepaga) {
      this.pagos = this.data.getPagosPrepaga(p.prepaga);
      this.porcentajes = this.data.calcPorcentajesSesiones(p.sesionesAut, p.sesiones);
    }

    if (p.tipo === CONSTANTS.pacientePrivado) {
    }

    // console.log('paciente cargado', p);
  }

  goBack() {
    this.location.back();
  }

  onChangeTipo(newValue) {
    if (newValue === CONSTANTS.pacientePrepaga) {
      this.paciente.facturaPrepaga = true;
    }
  }

  onChangePrepaga(newValue) {
    // cargo pagos de la prepaga
    this.pagos = newValue ? this.data.getPagosPrepaga(newValue) : [];
  }

  resetSesiones(e) {
    // console.log('Reset sesiones', e);
  }

  guardar() {
    // console.log('Guardando paciente...', this.paciente);
  }

  checkExistePaciente() {
    if (this.paciente.nombre && this.paciente.apellido) {
      if (_.findIndex(this.pacientes, p => {
        const item = _.trim(p.nombre) + _.trim(p.apellido);
        const pac = _.trim(this.paciente.nombre) + _.trim(this.paciente.apellido);
        return item.toUpperCase() === pac.toUpperCase() && p.id !== this.paciente.id;
      }) !== -1) {
        // console.log('YA EXISTE PACIENTE');

        // LEVANTAR TOASTER

      };
    }
  }

}
