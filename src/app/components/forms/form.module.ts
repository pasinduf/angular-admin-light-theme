import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormElementsComponent } from './form-elements/form-elements.component';
import { FormAdvancedComponent } from './form-advanced/form-advanced.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { FormWizardsComponent } from './form-wizards/form-wizards.component';
import { FormEditorsComponent } from './form-editors/form-editors.component';
import { FormRoutingModule } from './form-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';
import { QuillModule } from 'ngx-quill';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { DropzoneConfigInterface, DropzoneModule, DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { RouterModule } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ArchwizardModule } from 'angular-archwizard';
import { ColorPickerModule } from 'ngx-color-picker';
import { DpDatePickerModule } from 'ng2-date-picker';
import { NgxSliderModule } from '@angular-slider/ngx-slider';


const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
   url: 'https://httpbin.org/post',
   maxFilesize: 50,
   acceptedFiles: 'image/*'
 };
 


@NgModule({
  declarations: [ FormElementsComponent, FormAdvancedComponent, FormLayoutsComponent, FormValidationComponent, FormWizardsComponent, FormEditorsComponent],
  imports: [
    CommonModule,
    FormRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule,
    NgSelectModule,
    AngularMultiSelectModule,
    CKEditorModule,
    AngularEditorModule,
    HttpClientModule,
    QuillModule.forRoot(),
    NgxIntlTelInputModule,
    NgxDaterangepickerMd.forRoot(),
    DropzoneModule,
    NgxDropzoneModule,
    ToastrModule.forRoot(
      {
        timeOut: 1000
      }
    ),
    ArchwizardModule,
    ColorPickerModule,
    DpDatePickerModule,
    NgxSliderModule
  ],
  providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG
    },
    ToastrService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FormModule { }
