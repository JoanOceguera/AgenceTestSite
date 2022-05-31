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
  public pieChartData: number[] = [];
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
      this.pieChartData.push(gananciaParcial);
    });
    this.pieChartData.forEach((data) =>
    {
      var indice = this.pieChartData.indexOf(data);
      this.pieChartData[indice] = (data / this.gananciaTotal) * 100;
    });

    new Chart("graficoPastel", {
      type: 'pie',
      data: {
        labels: this.pieChartLabels,
        datasets: [{
          data: this.pieChartData,
          hoverOffset: 4
        }]
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: '% de ganancia de los consultores',
            fullSize: true
          }
        }
      }
    });
  }
};
