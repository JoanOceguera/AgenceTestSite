import { formatDate } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Chart, ChartDataset, ChartType, registerables } from 'chart.js';
import { AdviserSummary } from '../interfaces/AdviserSummary';
Chart.register(...registerables);


@Component({
  selector: 'app-grafico-barras-consultor',
  templateUrl: './grafico-barras-consultor.component.html',
  styleUrls: ['./grafico-barras-consultor.component.css']
})
export class GraficoBarrasConsultorComponent implements OnInit
{

  @Input() resumenConsultores: AdviserSummary[] = [];
  consultorGanancia: any[] = [];
  periodos: string[] = [];

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Resumen de ganancias de los consultores'
      }
    }
  };
  public barChartLabels: string[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData: ChartDataset[] = [];

  constructor() { }

  ngOnInit (): void
  {
    var costoMedioTotal = 0;
    var dataforMedia: number[] = [];
    this.resumenConsultores.forEach((resumen) =>
    {
      var operationsSummary = new Map(Object.entries(resumen.operationsSummary));
      Object.keys(resumen.operationsSummary).forEach((key) =>
      {
        var date = new Date(key);
        var newkey = formatDate(date, "MMMM yyyy", 'es');
        if (this.barChartLabels.indexOf(newkey) === -1)
        {
          this.barChartLabels.push(newkey);
        }
        this.consultorGanancia.push({
          consultor: resumen.no_usuario, ganancia: operationsSummary.get(key), key: newkey
        });
      });
      costoMedioTotal += resumen.fixed_cost;
    });
    this.resumenConsultores.forEach((resumen) =>
    {
      var data: number[] = [];
      this.barChartLabels.forEach((label) =>
      {
        var ganancia = this.consultorGanancia.filter((item) =>
        {
          return item.consultor === resumen.no_usuario && item.key === label;
        });
        if (ganancia[0] != undefined)
        {
          data.push(ganancia[0].ganancia);
        }
        else
          data.push(0);
      });
      dataforMedia.push(costoMedioTotal / this.resumenConsultores.length);
      this.barChartData.push(
        {
          data: data, label: resumen.no_usuario
        }
      );
    });
    this.barChartData.push({
      data: dataforMedia, label: 'Costo fijo medio', type: 'line',
      borderColor: 'black',
      backgroundColor: 'rgba(123,31,162,0.70)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
      fill: 'origin'
    });
  }

}
