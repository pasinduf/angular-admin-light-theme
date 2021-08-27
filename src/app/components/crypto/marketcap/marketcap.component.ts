import { Component, OnInit } from '@angular/core';
import { cryptoMarketData } from 'src/app/shared/data/crypto-market';
import * as chartData from "../../../shared/data/crypto-market";

@Component({
  selector: 'app-marketcap',
  templateUrl: './marketcap.component.html',
  styleUrls: ['./marketcap.component.scss']
})
export class MarketcapComponent implements OnInit {

  public cryptoMarketData = cryptoMarketData

  constructor() { }

  ngOnInit(): void {
  }

  //charts using Apex
  public lineApexChart = chartData.lineApexChart;
  public ApexData1 = chartData.ApexData1;
  public ApexData2 = chartData.ApexData2;
  public ApexData3 = chartData.ApexData3;
  public ApexData4 = chartData.ApexData4;


}
