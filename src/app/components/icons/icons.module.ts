import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeComponent } from './font-awesome/font-awesome.component';
import { MaterialDesignComponent } from './material-design/material-design.component';
import { SimpleLineComponent } from './simple-line/simple-line.component';
import { FeatherComponent } from './feather/feather.component';
import { IonicComponent } from './ionic/ionic.component';
import { FlagComponent } from './flag/flag.component';
import { Pe7Component } from './pe7/pe7.component';
import { ThemifyComponent } from './themify/themify.component';
import { TypiconsComponent } from './typicons/typicons.component';
import { WeatherComponent } from './weather/weather.component';
import { MaterialComponent } from './material/material.component';
import { IconsRoutingModule } from './icons-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [FontAwesomeComponent, MaterialDesignComponent, SimpleLineComponent, FeatherComponent, IonicComponent, FlagComponent, Pe7Component, ThemifyComponent, TypiconsComponent, WeatherComponent, MaterialComponent],
  imports: [
    CommonModule,
    IconsRoutingModule,
    NgbModule
  ]
})
export class IconsModule { }
