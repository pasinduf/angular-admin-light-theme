import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicComponent } from './basic/basic.component';
import { DataComponent } from './data/data.component';
import { TablesRoutingModule } from './tables-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';



@NgModule({
  declarations: [BasicComponent, DataComponent],
  imports: [
    CommonModule,
    TablesRoutingModule,
    NgxDatatableModule
  ]
})
export class TablesModule { }
