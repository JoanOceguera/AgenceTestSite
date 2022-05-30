import { Component, Input, OnInit } from '@angular/core';
import { RendimientoComercialComponent } from '../rendimiento-comercial/rendimiento-comercial.component';
import localeBr from '@angular/common/locales/pt';
import localeES from '@angular/common/locales/es';
import { formatDate, registerLocaleData } from '@angular/common';
import { AdviserSummary } from '../interfaces/AdviserSummary';
registerLocaleData(localeBr, 'pt');
registerLocaleData(localeES, 'es');

@Component({
  selector: 'app-resumen-consultor',
  templateUrl: './resumen-consultor.component.html',
  styleUrls: ['./resumen-consultor.component.css']
})
export class ResumenConsultorComponent implements OnInit
{
  
  @Input() resumenConsultores: AdviserSummary[] = [];

  constructor() { }

  ngOnInit (): void
  { 
    this.resumenConsultores.forEach((resumen: AdviserSummary) =>
    {
      var operationsSummary = new Map(Object.entries(resumen.operationsSummary));
      Object.keys(resumen.operationsSummary).forEach(function (key) 
      {
        var date = new Date(key);
        var newkey = formatDate(date, "MMMM yyyy", 'es');
        var value = operationsSummary.get(key);
        operationsSummary.set(newkey, value);
        operationsSummary.delete(key);
      });
      resumen.operationsSummary = operationsSummary;

      var commissions = new Map(Object.entries(resumen.commissions));
      Object.keys(resumen.commissions).forEach(function (key) 
      {
        var date = new Date(key);
        var newkey = formatDate(date, "MMMM yyyy", 'es');
        var value = commissions.get(key);
        commissions.set(newkey, value);
        commissions.delete(key);
      });
      resumen.commissions = commissions;      
    });

  }
  lucro (ganancia: any, costo_fijo: any, commission: any)
  {
    return ganancia - costo_fijo - commission;    
  }

  totalGanancia (operationsSummary:Map<string, string | number>)
  {
    var total = 0;
    for (let valor of operationsSummary.values())
    {
      total += Number.parseFloat(valor.toString());
    }
    return total;
  }

  totalCostoFijo (costo_fijo: number, periodos: number)
  {
    var total = costo_fijo * periodos;
    return total;
  }

    totalComision (commissions:Map<string, string | number>)
  {
    var total = 0;
    for (let valor of commissions.values())
    {
      total += Number.parseFloat(valor.toString());
    }
    return total;
  }
}
