import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoPacienteViewComponent } from './tipo-paciente-view.component';

describe('TipoPacienteViewComponent', () => {
  let component: TipoPacienteViewComponent;
  let fixture: ComponentFixture<TipoPacienteViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoPacienteViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoPacienteViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
