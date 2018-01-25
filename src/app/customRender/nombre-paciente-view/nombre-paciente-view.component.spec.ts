import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NombrePacienteViewComponent } from './nombre-paciente-view.component';

describe('NombrePacienteViewComponent', () => {
  let component: NombrePacienteViewComponent;
  let fixture: ComponentFixture<NombrePacienteViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NombrePacienteViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NombrePacienteViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
