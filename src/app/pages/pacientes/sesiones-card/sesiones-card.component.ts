import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-sesiones-card',
  styleUrls: ['./sesiones-card.component.scss'],
  templateUrl: './sesiones-card.component.html'
})
export class SesionesCardComponent implements OnInit {

  @Input() tipo: string;
  @Input() cantidad: number;
  @Input() porcentaje: number;
  @Output() onReset = new EventEmitter<any>();

  porc: string;
  color: string;
  reset: boolean = false;

  constructor() { }

  ngOnInit() {
    if (this.tipo !== 'realizadas') {
      // Sesiones Usadas/Restantes
      if (this.tipo === 'usadas') {
        this.porc = this.porcentaje > 0 ? this.porcentaje.toString() : '0';
        if (this.porcentaje < 70) {
          this.color = 'info';
        } else if (this.porcentaje < 90) {
          this.color = 'warning';
        } else {
          this.color = 'danger';
        }
        this.reset = true;
      } else {
        this.porc = this.porcentaje > 0 ? this.porcentaje.toString() : '100';
        if (this.porcentaje > 70) {
          this.color = 'success';
        } else if (this.porcentaje > 10) {
          this.color = 'warning';
        } else {
          this.color = 'danger';
        }
      }
    } else {
      // Sesiones Realizadas
      this.color = 'info';
    }
  }

  resetAction() {
    this.onReset.emit();
  }

}
