import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailInboxComponent } from './mail-inbox/mail-inbox.component';
import { ViewMailComponent } from './view-mail/view-mail.component';
import { MailRoutingModule } from './mail-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [MailInboxComponent, ViewMailComponent],
  imports: [
    CommonModule,
    MailRoutingModule,
    NgbModule
  ]
})
export class MailModule { }
