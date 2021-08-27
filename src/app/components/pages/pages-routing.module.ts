import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DangermessageComponent } from './dangermessage/dangermessage.component';
import { EmptypageComponent } from './emptypage/emptypage.component';
import { FaqsComponent } from './faqs/faqs.component';
import { GalleryComponent } from './gallery/gallery.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PricingComponent } from './pricing/pricing.component';
import { ProfileComponent } from './profile/profile.component';
import { SuccessmessageComponent } from './successmessage/successmessage.component';
import { WarningmessageComponent } from './warningmessage/warningmessage.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'empty-page',
        component: EmptypageComponent
      },
      {
        path: 'faqs',
        component: FaqsComponent
      },
      {
        path: 'gallery',
        component: GalleryComponent
      },
      {
        path: 'invoice',
        component: InvoiceComponent
      },
      {
        path: 'pricing',
        component: PricingComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
    ]
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class  PagesRoutingModule { }