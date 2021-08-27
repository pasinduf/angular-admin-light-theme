import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundComponent } from './background/background.component';
import { BorderComponent } from './border/border.component';
import { DisplayComponent } from './display/display.component';
import { FlexComponent } from './flex/flex.component';
import { HeightComponent } from './height/height.component';
import { MarginComponent } from './margin/margin.component';
import { PaddingComponent } from './padding/padding.component';
import { PositionComponent } from './position/position.component';
import { WidthComponent } from './width/width.component';
import { ExtrasComponent } from './extras/extras.component';
import { UtilitiesRoutingModule } from './utilities-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgCircleProgressModule } from 'ng-circle-progress';



@NgModule({
  declarations: [BackgroundComponent, BorderComponent, DisplayComponent, FlexComponent, HeightComponent, MarginComponent, PaddingComponent, PositionComponent, WidthComponent, ExtrasComponent],
  imports: [
    CommonModule,
    UtilitiesRoutingModule,
    NgbModule,
    NgCircleProgressModule.forRoot(),
  ]
})
export class UtilitiesModule { }
