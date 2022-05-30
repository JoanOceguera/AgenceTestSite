import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafico-barras-consultor',
  templateUrl: './grafico-barras-consultor.component.html',
  styleUrls: ['./grafico-barras-consultor.component.css']
})
export class GraficoBarrasConsultorComponent implements OnInit {

  @Input() resumenConsultores: any []= [];
  constructor() { }

  ngOnInit (): void
  {
    
  }

}
