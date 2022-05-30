import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoPastelConsultorComponent } from './grafico-pastel-consultor.component';

describe('GraficoPastelConsultorComponent', () => {
  let component: GraficoPastelConsultorComponent;
  let fixture: ComponentFixture<GraficoPastelConsultorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoPastelConsultorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoPastelConsultorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
