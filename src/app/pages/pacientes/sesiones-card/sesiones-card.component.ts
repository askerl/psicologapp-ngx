import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-sesiones-card',
  styleUrls: ['./sesiones-card.component.scss'],
  templateUrl: './sesiones-card.component.html'
})
export class SesionesCardComponent {

  @Input() tipo: string;
  @Input() cantidad: number;

}
