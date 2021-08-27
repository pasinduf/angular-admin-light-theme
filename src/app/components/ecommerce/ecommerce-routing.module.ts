import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { EcommerceDashboardComponent } from './ecommerce-dashboard/ecommerce-dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'account',
                component: AccountComponent
            },
            {
                path: 'cart',
                component: CartComponent
            },
            {
                path: 'checkout',
                component: CheckoutComponent
            },
            {
                path: 'ecommerce-dashboard',
                component: EcommerceDashboardComponent
            },
            {
                path: 'orders',
                component: OrdersComponent
            },
            {
                path: 'products',
                component: ProductsComponent
            },
            {
                path: 'products-details',
                component: ProductsDetailsComponent
            },
        ],
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EcommerceRoutingModule { }
