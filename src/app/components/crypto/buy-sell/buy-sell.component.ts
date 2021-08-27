import { Component, OnInit, ViewChild } from '@angular/core';
import { ApexOptions } from 'apexcharts';
import { ChartComponent, } from "ng-apexcharts";
import { data } from "./series-data";
@Component({
  selector: 'app-buy-sell',
  templateUrl: './buy-sell.component.html',
  styleUrls: ['./buy-sell.component.scss']
})
export class BuySellComponent implements OnInit {
  public Tab;
  coins = [
    {
      id: 'group1',
      title: 'Coins',
      coinName: [
        { id: 1, icon: 'cf cf-btc', title: 'BTC' },
        { id: 2, icon: 'cf cf-eth', title: 'ETH' },
        { id: 3, icon: 'cf cf-xrp', title: 'XRP' },
        { id: 4, icon: 'cf cf-dash', title: 'DASH' },
        { id: 5, icon: 'cf cf-neos', title: 'NEO' },
        { id: 6, icon: 'cf cf-ltc', title: 'LTC' },
        { id: 7, icon: 'cf cf-bsd', title: 'BSD' },
      ]
    },
  ]
  
  dollarCoin = [
    {
      id: 'group1',
      title: 'Coins',
      coinName: [
        { id: 1, icon: 'fa-dollar-sign', title: 'USD' },
        { id: 2, icon: 'fa-dollar-sign', title: 'AED' },
        { id: 3, icon: 'fa-dollar-sign', title: 'AUD' },
        { id: 4, icon: 'fa-dollar-sign', title: 'ARS' },
        { id: 5, icon: 'fa-dollar-sign', title: 'AZN' },
        { id: 6, icon: 'fa-dollar-sign', title: 'BGN' },
        { id: 7, icon: 'fa-dollar-sign', title: 'BRL' },
      ]
    },
  ]

  @ViewChild("chart", { static: false }) chart: ChartComponent;

  // public chartOptions: Partial<ChartOptions>;
  public chartOptions: ApexOptions;
  public activeOptionButton = "all";
  public updateOptionsData = {
    "1m": {
      xaxis: {
        min: new Date("28 Jan 2013").getTime(),
        max: new Date("27 Feb 2013").getTime()
      }
    },
    "6m": {
      xaxis: {
        min: new Date("27 Sep 2012").getTime(),
        max: new Date("27 Feb 2013").getTime()
      }
    },
    "1y": {
      xaxis: {
        min: new Date("27 Feb 2012").getTime(),
        max: new Date("27 Feb 2013").getTime()
      }
    },
    "1yd": {
      xaxis: {
        min: new Date("01 Jan 2013").getTime(),
        max: new Date("27 Feb 2013").getTime()
      }
    },
    all: {
      xaxis: {
        min: undefined,
        max: undefined
      }
    }
  };
  constructor() {
    this.initChart();
  }

  ngOnInit(): void {

  }

  initChart(): void {
    this.chartOptions = {
      series: [
        {
          data: data
        }
      ],
      colors: ['#6259ca'],
      chart: {
        type: "area",
        height: 370,
        toolbar: {
          show: false
        }
      },
      annotations: {
        yaxis: [
          {
            y: 30,
            borderColor: "#999",
            label: {
              text: "Support",
              style: {
                color: "#fff",
                background: "#00E396"
              }
            }
          }
        ],
        xaxis: [
          {
            x: new Date("14 Nov 2012").getTime(),
            borderColor: "#999",
            label: {
              text: "Rally",
              style: {
                color: "#fff",
                background: "#775DD0"
              }
            }
          }
        ]
      },
      dataLabels: {
        enabled: false
      },
      markers: {
        size: 0
      },
      xaxis: {
        type: "datetime",
        min: new Date("01 Mar 2012").getTime(),
        tickAmount: 6
      },
      tooltip: {
        x: {
          format: "dd MMM yyyy"
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 100]
        }
      },
      stroke: {
        lineCap: 'butt',
        width: 2
      }
    };
  }

  public updateOptions(option: any): void {
    this.activeOptionButton = option;
    this.chart.updateOptions(this.updateOptionsData[option], false, true, true);
  }

 



}
