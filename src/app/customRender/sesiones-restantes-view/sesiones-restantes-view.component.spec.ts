import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SesionesRestantesViewComponent } from './sesiones-restantes-view.component';

describe('SesionesRestantesViewComponent', () => {
  let component: SesionesRestantesViewComponent;
  let fixture: ComponentFixture<SesionesRestantesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SesionesRestantesViewComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SesionesRestantesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
