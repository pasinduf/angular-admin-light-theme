import { Component, OnInit } from '@angular/core';
import * as L from 'Leaflet';
import * as chartData from "../../../shared/data/ecommerce-Dash";

@Component({
  selector: 'app-ecommerce-dashboard',
  templateUrl: './ecommerce-dashboard.component.html',
  styleUrls: ['./ecommerce-dashboard.component.scss']
})
export class EcommerceDashboardComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit(): void {
  }

  public lineChartOptions = chartData.lineChartOptions;
  public lineChartType = chartData.lineChartType;
  public lineChartData = chartData.lineChartData;
  public lineChartLabel = chartData.lineChartLabels;
  public lineChartLegend = chartData.lineChartLegend;


  //Radical using ApexCharts
  public apexChartOptions = chartData.apexChartOptions


  map: L.Map;
  json;
  //Basic Map
  options1 = {
    layers: [
      L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 20,
        attribution: ""
      }),
      L.circle([-23.533773, -46.625290], {
        color: '#6259ca',
        fillColor: '',
        fillOpacity: 0.8,
        radius: 100
      }),
      L.circle([55.751244, 37.618423], {
        color: '#6259ca',
        fillColor: '#6259ca',
        fillOpacity: 0.9,
        radius: 100
      }),
      L.circle([52.237049, 21.017532], {
        color: '#6259ca',
        fillColor: '#6259ca',
        fillOpacity: 0.9,
        radius: 100
      }),
      L.circle([51.213890, -110.005470], {
        color: '#6259ca',
        fillColor: '#6259ca',
        fillOpacity: 0.9,
        radius: 100
      }),
      L.circle([20.5937, 78.9629], {
        color: '#6259ca',
        fillColor: '#6259ca',
        fillOpacity: 0.9,
        radius: 100
      }),
    ],
    zoom: 1.2,
    center: L.latLng([0,0])
  
  };


}
