import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcommerceDashboardComponent } from './ecommerce-dashboard/ecommerce-dashboard.component';
import { ProductsComponent } from './products/products.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrdersComponent } from './orders/orders.component';
import { AccountComponent } from './account/account.component';
import { EcommerceRoutingModule } from './ecommerce-routing.module';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { ArchwizardModule } from 'angular-archwizard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EcommerceDashboardComponent, ProductsComponent, ProductsDetailsComponent, CartComponent, CheckoutComponent, OrdersComponent, AccountComponent],
  imports: [
    CommonModule,
    EcommerceRoutingModule,
    LeafletModule,
    ChartsModule,
    NgApexchartsModule,
    NgbModule,
    NgSelectModule,
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    ArchwizardModule,
  ],

  providers: [
    ToastrService
  ]
})
export class EcommerceModule { }
