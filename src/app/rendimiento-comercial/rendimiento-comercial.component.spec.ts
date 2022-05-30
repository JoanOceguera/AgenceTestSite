import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendimientoComercialComponent } from './rendimiento-comercial.component';

describe('RendimientoComercialComponent', () => {
  let component: RendimientoComercialComponent;
  let fixture: ComponentFixture<RendimientoComercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RendimientoComercialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RendimientoComercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
