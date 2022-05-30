import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, MY_DATE_FORMATS } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RendimientoComercialComponent } from './rendimiento-comercial/rendimiento-comercial.component';
import { ApiService } from './api.service';
import { ResumenConsultorComponent } from './resumen-consultor/resumen-consultor.component';
import { GraficoBarrasConsultorComponent } from './grafico-barras-consultor/grafico-barras-consultor.component';
import { GraficoPastelConsultorComponent } from './grafico-pastel-consultor/grafico-pastel-consultor.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatCommonModule, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSortModule } from '@angular/material/sort';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http'
import { MomentDateModule } from '@angular/material-moment-adapter';
import {MatTabsModule} from '@angular/material/tabs'; 

 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RendimientoComercialComponent,
    ResumenConsultorComponent,
    GraficoBarrasConsultorComponent,
    GraficoPastelConsultorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    NgbModule,
    MatSelectModule,
    MatDatepickerModule,
    MatButtonModule,
    MatTableModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    MatCommonModule,
    MatListModule,
    MatSortModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatNativeDateModule,
    HttpClientModule,
    MomentDateModule, 
    MatTabsModule    
  ],
  providers: [ApiService, {provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS}],
  bootstrap: [AppComponent]
})
export class AppModule { }
