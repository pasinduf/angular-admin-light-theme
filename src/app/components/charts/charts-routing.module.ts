import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApexComponent } from './apex/apex.component';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { ChartlistComponent } from './chartlist/chartlist.component';
import { EchartComponent } from './echart/echart.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'apex',
        component: ApexComponent
      },
      {
        path: 'chartjs',
        component: ChartjsComponent
      },
      {
        path: 'chartlist',
        component: ChartlistComponent
      },
      {
        path: 'echart',
        component: EchartComponent
      },
    ]
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartsRoutingModule { }