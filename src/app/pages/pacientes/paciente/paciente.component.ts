import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.scss'],
})
export class PacienteComponent implements OnInit {

  id;
  nuevo: boolean = true;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.nuevo = this.id === 'new';
    // console.log('Id', this.id);
    // console.log('Nuevo', this.nuevo);
  }

}
