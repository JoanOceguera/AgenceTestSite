import { Component, Input, OnInit } from '@angular/core';
import { RendimientoComercialComponent } from '../rendimiento-comercial/rendimiento-comercial.component';

@Component({
  selector: 'app-resumen-consultor',
  templateUrl: './resumen-consultor.component.html',
  styleUrls: ['./resumen-consultor.component.css']
})
export class ResumenConsultorComponent implements OnInit
{
  
  @Input() resumenConsultores: any []= [];

  constructor() { }

  ngOnInit (): void
  {
    console.log(this.resumenConsultores);
  }
}
