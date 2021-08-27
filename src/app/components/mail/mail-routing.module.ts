import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MailInboxComponent } from './mail-inbox/mail-inbox.component';
import { ViewMailComponent } from './view-mail/view-mail.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'mail-inbox',
        component: MailInboxComponent
      },
      {
        path: 'view-mail',
        component: ViewMailComponent
      },
    ]
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class  MailRoutingModule{ }