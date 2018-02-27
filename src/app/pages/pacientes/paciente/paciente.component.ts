import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../data/data.service';
import * as moment from 'moment';

@Component({
  selector: 'ngx-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.scss'],
})
export class PacienteComponent implements OnInit {

  id;
  nuevo: boolean = true;
  paciente: any = {};

  constructor(private route: ActivatedRoute, private data: DataService) {

  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.nuevo = this.id === 'new';
    this.data.getPaciente(this.id).subscribe(
      (pac: any) => {
        this.loadPaciente(pac);
        // console.log('Paciente', this.paciente);

    });
  }

  loadPaciente(p) {
    this.paciente = p;
    p.fchNac = moment(p.fchNac, 'DD/MM/YYYY').format('YYYY-MM-DD');
  }

}
