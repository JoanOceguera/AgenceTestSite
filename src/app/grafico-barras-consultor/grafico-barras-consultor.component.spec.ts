import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoBarrasConsultorComponent } from './grafico-barras-consultor.component';

describe('GraficoBarrasConsultorComponent', () => {
  let component: GraficoBarrasConsultorComponent;
  let fixture: ComponentFixture<GraficoBarrasConsultorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoBarrasConsultorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoBarrasConsultorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
