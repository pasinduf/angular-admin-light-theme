import { Component, OnInit } from '@angular/core';
import { cryptoDashboard } from 'src/app/shared/data/crypto-dash';
import { OwlOptions } from 'ngx-owl-carousel-o';
import * as chartData from "../../../shared/data/crypto-dash";

@Component({
  selector: 'app-crypto-dashboard',
  templateUrl: './crypto-dashboard.component.html',
  styleUrls: ['./crypto-dashboard.component.scss']
})
export class CryptoDashboardComponent implements OnInit {

  cryptoDashdata = cryptoDashboard;
  customOptions: OwlOptions

  constructor() { }

  ngOnInit(): void {
    this.customOptions = {
      loop: true,
      autoplay: true,
      slideTransition: 'linear',
      autoplaySpeed: 4900,
      autoplayHoverPause: true,
      smartSpeed: 1000,
      center: true,
      margin: 22,
      dots: false,
      rewind: false,
      lazyLoad: false,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 3,
        nav: true
      },
      992: {
        items: 4,
        nav: true
      },
      1300: {
        items: 5,
        nav: true
      },
      1500: {
        items: 5,
        nav: true
      },
    }
  }
}



  //DonutChart using Apex
  public donutApexData = chartData.donutApexData;
  //DonutChartProfile using Apex
  public donutApexProfile = chartData.donutApexProfile;

  //Apex Chart
  public apexData = chartData.apexCryptoData

  //bitcoin line using ApexCharts
  public lineApexChart = chartData.lineApexChart

  //Sparkline using ApexCharts
  public apexSparkline = chartData.apexSparkline;
  public apexSparkline1 = chartData.apexSparkline1;
  public apexSparkline2 = chartData.apexSparkline2;
  public apexSparkline3 = chartData.apexSparkline3;
  public apexSparkline4 = chartData.apexSparkline4;


  // owlCarouselData = [
  //   { id: 1, img: '../../assets/img/users/5.jpg', name: 'Reynante', designation: 'Web Developer'},
  //   { id: 2, img: '../../assets/img/users/4.jpg', name: 'Joyce Chua', designation: 'Team Leader'},
  //   { id: 3, img: '../../assets/img/users/6.jpg', name: 'Owen Bongcaras', designation: 'Web Designer'},
  //   { id: 4, img: '../../assets/img/users/7.jpg', name: 'Mariane Galeon', designation: 'Php Developer'},
  //   { id: 5, img: '../../assets/img/users/8.jpg', name: 'Reynante', designation: 'Web Developer'},
  //   { id: 6, img: '../../assets/img/users/9.jpg', name: 'Joyce Chua', designation: 'Team Leader'},
  //   { id: 7, img: '../../assets/img/users/10.jpg', name: 'Owen Bongcaras', designation: 'Web Designer'},
  //   { id: 8, img: '../../assets/img/users/11.jpg', name: 'Mariane Galeon', designation: 'Php Developer'},

  // ]

  owlCarouselData = [
    { id: 1, src: '../../assets/img/svgs/crypto-currencies/btc.svg', name: 'Bitcoin BTC', value: 1.343434 },
    { id: 2, src: '../../assets/img/svgs/crypto-currencies/eth.svg', name: 'Ethereum ETH', value: 3.763674 },
    { id: 3, src: '../../assets/img/svgs/crypto-currencies/xrp.svg', name: 'Ripple  XRP', value: 12.53647 },
    { id: 4, src: '../../assets/img/svgs/crypto-currencies/ltc.svg', name: 'litecoin  LTC', value: 3.635387 },
    { id: 5, src: '../../assets/img/svgs/crypto-currencies/dash.svg', name: 'Dash DASH', value: 3.635387 },
    { id: 6, src: '../../assets/img/svgs/crypto-currencies/xmr.svg', name: 'Monero  XMR', value: 5.34578 },
    { id: 7, src: '../../assets/img/svgs/crypto-currencies/neo.svg', name: 'Neo  NEO', value: 4.435456 },
    { id: 8, src: '../../assets/img/svgs/crypto-currencies/steem.svg', name: 'Steem STEEM', value: 2.345467 },

  ]
}
