import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/of';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable()
export class DataService {

	private pacientesCollection: AngularFirestoreCollection<any> = this.afs.collection('pacientes', ref => ref.orderBy("apellido","asc").orderBy("nombre","asc"));
  pacientes: Observable<any[]>;
  
  tipoPaciente = {
    "O": { nombre: "Obra social", color: "primary" },
    "P": { nombre: "Privado", color: "warning" },
  };

  prepagasById = {
    "galeno": {
        nombre: "Galeno",
        pagos: [15, 175, 452.36],
    },
    "ososs": {
        nombre: "OSOSS",
        pagos: [230],
    },
    "ospacp": {
        nombre: "O.S.P.A.C.P",
        pagos: [230],
    }
}

	constructor(private readonly afs: AngularFirestore) {

  }
  
  getPacientes() {
    this.pacientes = this.pacientesCollection.snapshotChanges().map(actions => {
			return actions.map(a => {
				const id = a.payload.doc.id;
			  let paciente = a.payload.doc.data();
        paciente.nombreCompleto = `${paciente.apellido}, ${paciente.nombre}`;
        paciente.sesionesRestantes = paciente.sesionesAut ? (paciente.sesionesAut - paciente.sesiones) : '';
        let porcs = this.calcPorcentajesSesiones(paciente.sesionesAut, paciente.sesiones);
        paciente.porcRestantes = porcs.porcRestantes;
			  return { id, ...paciente };
			});
		});
  }

  calcPorcentajesSesiones(sesionesAut, sesiones) {
    let porcUsadas = sesionesAut > 0 ? sesiones / sesionesAut * 100 : 0;
    let porcRestantes = sesionesAut > 0 ? (sesionesAut - sesiones)/ sesionesAut * 100 : 0 ;
    return {porcUsadas, porcRestantes};
  }

  getFiltroTipoPaciente() {
    let list = [];
    for (const key in this.tipoPaciente) {
      list.push({ value: key, title: this.tipoPaciente[key].nombre })
    }
    return list;
  }

  getFiltroPrepaga() {
    let list = [];
    for (const key in this.prepagasById) {
      list.push({ value: key, title: this.prepagasById[key].nombre })
    }
    return list;
  }

}
