import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable()
export class DataService {

  private pacientesCollection: AngularFirestoreCollection<any> = this.afs.collection('pacientes',
    ref => ref.orderBy('apellido', 'asc').orderBy('nombre', 'asc'));
  pacientes: Observable<any[]>;

  tipoPaciente = {
    'O': { nombre: 'Obra social', color: 'primary' },
    'P': { nombre: 'Privado', color: 'warning' },
  };

  prepagasById = {
    'galeno': {
        nombre: 'Galeno',
        pagos: [15, 175, 452.36],
    },
    'ososs': {
        nombre: 'OSOSS',
        pagos: [230],
    },
    'ospacp': {
        nombre: 'O.S.P.A.C.P',
        pagos: [230],
    },
  }

  constructor(private readonly afs: AngularFirestore) {

  }

  getPacientes() {
    this.pacientes = this.pacientesCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const id = a.payload.doc.id;
        const paciente = a.payload.doc.data();
        paciente.nombreCompleto = `${paciente.apellido}, ${paciente.nombre}`;
        paciente.sesionesRestantes = paciente.sesionesAut ? (paciente.sesionesAut - paciente.sesiones) : '';
        const porcs = this.calcPorcentajesSesiones(paciente.sesionesAut, paciente.sesiones);
        paciente.porcRestantes = porcs.porcRestantes;
        return { id, ...paciente };
      });
    });
  }

  calcPorcentajesSesiones(sesionesAut, sesiones) {
    const porcUsadas = sesionesAut > 0 ? sesiones / sesionesAut * 100 : 0;
    const porcRestantes = sesionesAut > 0 ? (sesionesAut - sesiones) / sesionesAut * 100 : 0 ;
    return {porcUsadas, porcRestantes};
  }

  getFiltroTipoPaciente() {
    const list = [], obj = this.tipoPaciente;
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        list.push({ value: key, title: obj[key].nombre })
      }
    }
    return list;
  }

  getFiltroPrepaga() {
    const list = [], obj = this.prepagasById;
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        list.push({ value: key, title: obj[key].nombre })
      }
    }
    return list;
  }

}
