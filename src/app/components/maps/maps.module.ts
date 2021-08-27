import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeafletComponent } from './leaflet/leaflet.component';
import { GoogleComponent } from './google/google.component';
import { MapsRoutingModule } from './maps-routing.module';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';



@NgModule({
  declarations: [LeafletComponent, GoogleComponent],
  imports: [
    CommonModule,
    MapsRoutingModule,
    HttpClientModule,
    LeafletModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCW16SmpzDNLsrP-npQii6_8vBu_EJvEjA'
    }),
  ]
})
export class MapsModule { }
