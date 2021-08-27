import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoogleComponent } from './google/google.component';
import { LeafletComponent } from './leaflet/leaflet.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'google',
        component: GoogleComponent
      },
      {
        path: 'leaflet',
        component: LeafletComponent
      },
    ]
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapsRoutingModule { }