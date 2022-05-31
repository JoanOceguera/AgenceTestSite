import { Component, Input, OnInit } from '@angular/core';
import { Chart, ChartDataset, ChartOptions, ChartType, registerables } from 'chart.js';
import { AdviserSummary } from '../interfaces/AdviserSummary';
Chart.register(...registerables);

@Component({
  selector: 'app-grafico-pastel-consultor',
  templateUrl: './grafico-pastel-consultor.component.html',
  styleUrls: ['./grafico-pastel-consultor.component.css']
})
export class GraficoPastelConsultorComponent implements OnInit
{

  @Input() resumenConsultores: AdviserSummary[] = [];
  constructor() { }
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: string[] = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartData: ChartDataset[] = [];
  public gananciaTotal = 0;

  ngOnInit (): void
  {
    this.resumenConsultores.forEach((resumen) =>
    {
      var gananciaParcial = 0;
      var operationsSummary = new Map(Object.entries(resumen.operationsSummary));
      for (let valor of operationsSummary.values())
      {
        this.gananciaTotal += Number.parseFloat(valor.toString());
        gananciaParcial += Number.parseFloat(valor.toString());
      }

      this.pieChartLabels.push(resumen.no_usuario);
      this.pieChartData.push({
        data: [gananciaParcial], label: resumen.no_usuario,
      });
    });
    this.pieChartData.forEach((data) =>
    {
      var valor: any = data.data[0];
      data.data = [valor / this.gananciaTotal * 100];
    });

  }

};
