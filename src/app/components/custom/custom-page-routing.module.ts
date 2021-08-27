import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './error404/error404.component';
import { UnderconstructionComponent } from './underconstruction/underconstruction.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '404-Error',
        component: Error404Component
      },
      {
        path: 'under-construction',
        component: UnderconstructionComponent
      },
    ]
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomPageRoutingModule  { }