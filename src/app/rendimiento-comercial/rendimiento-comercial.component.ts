import { AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdviserInterface } from '../interfaces/AdviserInterface';
import { CurrencyPipe, registerLocaleData } from '@angular/common';
import localeBr from '@angular/common/locales/pt';
import { ResumenConsultorComponent } from '../resumen-consultor/resumen-consultor.component';
import { AdviserSummary } from '../interfaces/AdviserSummary';
registerLocaleData(localeBr, 'pt');

@Component({
  selector: 'app-rendimiento-comercial',
  templateUrl: './rendimiento-comercial.component.html',
  styleUrls: ['./rendimiento-comercial.component.css']
})
export class RendimientoComercialComponent implements OnInit
{  
  consultorList: AdviserInterface [] = [];
  @ViewChild('DatosConsultores')
  datosConsultores!: ResumenConsultorComponent;
  showResumenConsultor: boolean = false;
  showGraficoBarrasConsultor: boolean = false;
  showGraficoPastelConsultor: boolean = false;
  consultorResumen: AdviserSummary [] = [];

  constructor(private service: ApiService, private router: Router, private CurrencyPipe: CurrencyPipe) { }

  ngOnInit (): void
  {
    this.service.getConsultores().subscribe((data: any) =>
    {
      if (data.isSuccess)
      {
        this.consultorList = data.result;
        }     
    })    
  }

  consultoresForm : any = new FormGroup(
    {
      consultores: new FormControl(this.consultorList, Validators.required),
      fechaInicio: new FormControl('', Validators.required),
      fechaFin: new FormControl('', Validators.required)
      
    })

  resumenConsultor ()
  {
    this.showResumenConsultor = false;
    this.service.getResumenConsultores(this.consultoresForm.value.consultores, this.consultoresForm.value.fechaInicio, this.consultoresForm.value.fechaFin).subscribe((data: any) =>
    {      
      if (data.isSuccess)
      {        
        this.consultorResumen = data.result;
        this.showResumenConsultor = true;
        this.showGraficoBarrasConsultor = false;
        this.showGraficoPastelConsultor = false;
      }      
    })
  }
  graficoBarras ()
  {
    this.showGraficoBarrasConsultor = false;
    this.service.getResumenConsultores(this.consultoresForm.value.consultores, this.consultoresForm.value.fechaInicio, this.consultoresForm.value.fechaFin).subscribe((data: any) =>
    {
      if (data.isSuccess)
      {
        this.consultorResumen = data.result;
        this.showResumenConsultor = false;
        this.showGraficoBarrasConsultor = true;
        this.showGraficoPastelConsultor= false;
      }      
    })
  }

  graficoPastel ()
  {
    this.showGraficoPastelConsultor = false;
    this.service.getResumenConsultores(this.consultoresForm.value.consultores, this.consultoresForm.value.fechaInicio, this.consultoresForm.value.fechaFin).subscribe((data: any) =>
    {
      if (data.isSuccess)
      {
        this.consultorResumen = data.result;
        this.showResumenConsultor = false;
        this.showGraficoBarrasConsultor = false;
        this.showGraficoPastelConsultor= true;
      }      
    })
  }

}
