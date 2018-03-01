import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { CONSTANTS } from './constants';
import * as moment from 'moment';

@Injectable()
export class DataService {

  private pacientesCollection: AngularFirestoreCollection<any>;
  pacientes: Observable<any[]>;

  constructor(private readonly afs: AngularFirestore) {
  }

  getPacientes(estado) {

    if (estado !== null) {
      // filtro por estado
      this.pacientesCollection = this.afs.collection('pacientes',ref => ref.where('activo','==',estado).orderBy('apellido', 'asc').orderBy('nombre', 'asc'));
    } else {
      // todos los pacientes
      this.pacientesCollection = this.afs.collection('pacientes',ref => ref.orderBy('apellido', 'asc').orderBy('nombre', 'asc'));
    }

    this.pacientes = this.pacientesCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        return this.setPacienteFromData(a);
      });
    });
  }

  getPaciente(id) {
    return this.afs.doc('pacientes/'+id).valueChanges();
  }

  setPacienteFromData(a) {
    const id = a.payload.doc.id;
    const paciente = a.payload.doc.data();
    paciente.nombreCompleto = `${paciente.apellido}, ${paciente.nombre}`;
    paciente.sesionesRestantes = paciente.sesionesAut ? (paciente.sesionesAut - paciente.sesiones) : '';
    const porcs = this.calcPorcentajesSesiones(paciente.sesionesAut, paciente.sesiones);
    paciente.porcRestantes = porcs.porcRestantes;
    const fchNacMoment = moment(paciente.fchNac, 'DD/MM/YYYY');
    paciente.edad = fchNacMoment.isValid() ? moment().diff(fchNacMoment, 'years') : 0;

    return { id, ...paciente };
  }

  calcPorcentajesSesiones(sesionesAut, sesiones) {
    const porcUsadas = sesionesAut > 0 ? sesiones / sesionesAut * 100 : 0;
    const porcRestantes = sesionesAut > 0 ? (sesionesAut - sesiones) / sesionesAut * 100 : 0 ;
    return {porcUsadas, porcRestantes};
  }

  getFiltroTipoPaciente() {
    const list = [], obj = CONSTANTS.tipoPaciente;
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        list.push({ value: key, title: obj[key].nombre })
      }
    }
    return list;
  }

  getFiltroPrepaga() {
    const list = [], obj = CONSTANTS.prepagasById;
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        list.push({ value: key, title: obj[key].nombre })
      }
    }
    return list;
  }

  getNombrePrepaga(idPrepaga: string) {
    return CONSTANTS.prepagasById[idPrepaga].nombre;
  }

  getPagosPrepaga(idPrepaga: string) {
    return CONSTANTS.prepagasById[idPrepaga].pagos;
  }

}
