import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormAdvancedComponent } from './form-advanced/form-advanced.component';
import { FormEditorsComponent } from './form-editors/form-editors.component';
import { FormElementsComponent } from './form-elements/form-elements.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { FormWizardsComponent } from './form-wizards/form-wizards.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'advanced',
        component: FormAdvancedComponent
      },
      {
        path: 'editors',
        component: FormEditorsComponent
      },
      {
        path: 'elements',
        component: FormElementsComponent
      },
      {
        path: 'layouts',
        component: FormLayoutsComponent
      },
      {
        path: 'validation',
        component: FormValidationComponent
      },
      {
        path: 'wizards',
        component: FormWizardsComponent
      },
    ]
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }