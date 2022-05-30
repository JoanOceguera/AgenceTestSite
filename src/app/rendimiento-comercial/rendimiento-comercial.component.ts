import { Component, OnInit } from '@angular/core';
import { ResumenConsultorComponent } from '../resumen-consultor/resumen-consultor.component';
import { GraficoBarrasConsultorComponent } from '../grafico-barras-consultor/grafico-barras-consultor.component';
import { GraficoPastelConsultorComponent } from '../grafico-pastel-consultor/grafico-pastel-consultor.component';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdviserInterface } from '../interfaces/AdviserInterface';

@Component({
  selector: 'app-rendimiento-comercial',
  templateUrl: './rendimiento-comercial.component.html',
  styleUrls: ['./rendimiento-comercial.component.css']
})
export class RendimientoComercialComponent implements OnInit
{
  consultorList: AdviserInterface [] = [];
  
  showResumenConsultor: boolean = false;
  showGraficoBarrasConsultor: boolean = false;
  showGraficoPastelConsultor: boolean = false;
  consultorResumen: any [] = [];

  constructor(private service: ApiService, private router: Router) { }

  ngOnInit (): void
  {
    this.service.getConsultores().subscribe((data: any) =>
    {
      if (data.isSuccess)
      {
        this.consultorList = data.result;
        console.log(this.consultorList);
        }     
    })    
  }

  consultoresForm : any = new FormGroup(
    {
      consultores: new FormControl(this.consultorList, Validators.required),
      fechaInicio: new FormControl('', Validators.required),
      fechaFin: new FormControl('', Validators.required)
      
    })

  hide ()
  {
    this.showResumenConsultor = false;
    this.showGraficoBarrasConsultor = false;
    this.showGraficoPastelConsultor= false ;
  }

  show ()
  {
    this.showResumenConsultor = true;
    this.showGraficoBarrasConsultor = true;
    this.showGraficoPastelConsultor= true ;
  }

  resumenConsultor ()
  {
    this.service.getResumenConsultores(this.consultoresForm.value.consultores, this.consultoresForm.value.fechaInicio, this.consultoresForm.value.fechaFin).subscribe((data: any) =>
    {
      if (data.isSuccess)
      {
        console.log(data);
        this.consultorResumen = data.result;
        this.showResumenConsultor = true;
        this.showGraficoBarrasConsultor = false;
        this.showGraficoPastelConsultor= false ;

      }      
    })
  }
  graficoBarras ()
  {
    this.service.getResumenConsultores(this.consultoresForm.value.consultores, this.consultoresForm.value.fechaInicio, this.consultoresForm.value.fechaFin).subscribe((data: any) =>
    {
      if (data.isSuccess)
      {
        console.log(data);
        this.consultorResumen = data.result;
        this.showResumenConsultor = false;
        this.showGraficoBarrasConsultor = true;
        this.showGraficoPastelConsultor= false;
      }      
    })
  }

  graficoPastel ()
  {
    this.service.getResumenConsultores(this.consultoresForm.value.consultores, this.consultoresForm.value.fechaInicio, this.consultoresForm.value.fechaFin).subscribe((data: any) =>
    {
      if (data.isSuccess)
      {
        console.log(data);
        this.consultorResumen = data.result;
        this.showResumenConsultor = false;
        this.showGraficoBarrasConsultor = false;
        this.showGraficoPastelConsultor= true;
      }      
    })
  }

}
