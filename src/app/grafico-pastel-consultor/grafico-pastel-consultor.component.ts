import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafico-pastel-consultor',
  templateUrl: './grafico-pastel-consultor.component.html',
  styleUrls: ['./grafico-pastel-consultor.component.css']
})
export class GraficoPastelConsultorComponent implements OnInit {

  @Input() resumenConsultores: any []= [];
  constructor() { }

  ngOnInit (): void
  {
    console.log(this.resumenConsultores);
  }

}
