import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuySellComponent } from './buy-sell/buy-sell.component';
import { CryptoDashboardComponent } from './crypto-dashboard/crypto-dashboard.component';
import { CurrencyExchangeComponent } from './currency-exchange/currency-exchange.component';
import { MarketcapComponent } from './marketcap/marketcap.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { WalletComponent } from './wallet/wallet.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'buy-sell',
        component: BuySellComponent
      },
      {
        path: 'crypto-dashboard',
        component: CryptoDashboardComponent
      },
      {
        path: 'currency-exchange',
        component: CurrencyExchangeComponent
      },
      {
        path: 'marketcap',
        component: MarketcapComponent
      },
      {
        path: 'transactions',
        component: TransactionsComponent
      },
      {
        path: 'wallet',
        component: WalletComponent
      },
    ]
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CryptoRoutingModule { }