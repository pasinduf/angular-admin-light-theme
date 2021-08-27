import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatherComponent } from './feather/feather.component';
import { FlagComponent } from './flag/flag.component';
import { FontAwesomeComponent } from './font-awesome/font-awesome.component';
import { IonicComponent } from './ionic/ionic.component';
import { MaterialDesignComponent } from './material-design/material-design.component';
import { MaterialComponent } from './material/material.component';
import { Pe7Component } from './pe7/pe7.component';
import { SimpleLineComponent } from './simple-line/simple-line.component';
import { ThemifyComponent } from './themify/themify.component';
import { TypiconsComponent } from './typicons/typicons.component';
import { WeatherComponent } from './weather/weather.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'feather',
        component: FeatherComponent
      },
      {
        path: 'flag',
        component: FlagComponent
      },
      {
        path: 'font-awesome',
        component: FontAwesomeComponent
      },
      {
        path: 'ionic',
        component: IonicComponent
      },
      {
        path: 'material',
        component: MaterialComponent
      },
      {
        path: 'material-design',
        component: MaterialDesignComponent
      },
      {
        path: 'pe7',
        component: Pe7Component
      },
      {
        path: 'simple-line',
        component: SimpleLineComponent
      },
      {
        path: 'themify',
        component: ThemifyComponent
      },
      {
        path: 'typicons',
        component: TypiconsComponent
      },
      {
        path: 'weather',
        component: WeatherComponent
      },
    ]
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class  IconsRoutingModule { }