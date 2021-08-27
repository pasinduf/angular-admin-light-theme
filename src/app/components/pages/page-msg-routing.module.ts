import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DangermessageComponent } from './dangermessage/dangermessage.component';
import { SuccessmessageComponent } from './successmessage/successmessage.component';
import { WarningmessageComponent } from './warningmessage/warningmessage.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'success-message',
        component: SuccessmessageComponent
      },
      {
        path: 'warning-message',
        component: WarningmessageComponent
      },
      {
        path: 'danger-message',
        component: DangermessageComponent
      },
    ]
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class  PageMsgRoutingModule { }