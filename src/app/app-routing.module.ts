import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RendimientoComercialComponent } from './rendimiento-comercial/rendimiento-comercial.component';

const routes: Routes = [
  {path:'', component: RendimientoComercialComponent},
  {path:'rendimiento-comercial', component: RendimientoComercialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
