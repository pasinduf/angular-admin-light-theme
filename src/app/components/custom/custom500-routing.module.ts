import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error500Component } from './error500/error500.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '500-Error',
        component: Error500Component
      },
    ]
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Custom500RoutingModule  { }