import { Component, OnInit } from '@angular/core';
import * as chartData from "../../../shared/data/crypto-exchange";

@Component({
  selector: 'app-currency-exchange',
  templateUrl: './currency-exchange.component.html',
  styleUrls: ['./currency-exchange.component.scss']
})
export class CurrencyExchangeComponent implements OnInit {

  coinSelect = null;
  currencySelect = null;


  coinsData = [
    { value: 1, label: 'BTC' },
    { value: 2, label: 'Ethereum' },
    { value: 3, label: 'Ripple' },
    { value: 4, label: 'Bitcoin Cash' },
    { value: 5, label: 'Cardano' },
    { value: 6, label: 'Litecoin' },
    { value: 7, label: 'NEO' },
    { value: 8, label: 'Stellar' },
    { value: 9, label: 'EOS' },
    { value: 10, label: 'NEM' },
  ]
  currencyData = [
    { value: 1, label: 'USD' },
    { value: 2, label: 'EURO' },
    { value: 3, label: 'POUND' },
    { value: 4, label: 'Rupee' },
    { value: 5, label: 'WON' },
    { value: 6, label: 'DINAR' },
    { value: 7, label: 'RIAL' },
  ]

  constructor() { }

  ngOnInit(): void {
    this.coinSelect = this.coinsData[0];
    this.currencySelect = this.currencyData[0];
  }
  
  public cryptoExchangeApex = chartData.cryptoExchangeApex;
  public cryptoExApexData1 = chartData.cryptoExApexData1;
  public cryptoExApexData2 = chartData.cryptoExApexData2;
  public cryptoExApexData3 = chartData.cryptoExApexData3;
  public cryptoExApexData4 = chartData.cryptoExApexData4;
  public cryptoExApexData5 = chartData.cryptoExApexData5;
  public cryptoExApexData6 = chartData.cryptoExApexData6;

}
