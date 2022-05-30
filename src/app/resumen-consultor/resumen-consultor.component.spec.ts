import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenConsultorComponent } from './resumen-consultor.component';

describe('ResumenConsultorComponent', () => {
  let component: ResumenConsultorComponent;
  let fixture: ComponentFixture<ResumenConsultorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumenConsultorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumenConsultorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
