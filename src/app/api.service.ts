import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Moment } from 'moment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  baseUrl: string = "http://joanoceguera-001-site1.btempurl.com/api/Adviser/";
  
  getConsultores ()
  {
    return this.http.get(this.baseUrl);
  }

  getResumenConsultores (consultores: string [], fechaInicio: Moment, fechaFin: Moment)
  {
    let params = new HttpParams()
      .set('begin', fechaInicio.toISOString())
      .set('end', fechaFin.toISOString());
    consultores.forEach((nombre:string) =>{
  params = params.append('advicers', nombre);
})
    return this.http.get(this.baseUrl + "GetAdvisersSummary", {params});
  }
}
