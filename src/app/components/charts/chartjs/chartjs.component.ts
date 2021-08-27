import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import * as chartData from '../../../shared/data/chart/chartjs';

@Component({
  selector: 'app-chartjs',
  templateUrl: './chartjs.component.html',
  styleUrls: ['./chartjs.component.scss']
})
export class ChartjsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  //Line Chart
  public lineChartOptions = chartData.lineChartOptions
  public lineChartLabels = chartData.lineChartLabels
  public lineChartType = chartData.lineChartType
  public lineChartLegend = chartData.lineChartLegend
  public lineChartData = chartData.lineChartData
  public lineChartColors = chartData.lineChartColors


  // Bar Chart 1
  public barChartOptions = chartData.barChartOptions;
  public barChartLabels = chartData.barChartLabels;
  public barChartType = chartData.barChartType;
  public barChartLegend = chartData.barChartLegend;
  public barChartPlugins = chartData.barChartPlugins;
  public barChartData = chartData.barChartData;
  public barChartColors = chartData.barchart2Colors;


  //Bar Chart 2
  public barChart2Options = chartData.barChart2Options;
  public barChart2Labels = chartData.barChart2Labels;
  public barChart2Type = chartData.barChart2Type;
  public barChart2Legend = chartData.barChart2Legend;
  public barChart2Plugins = chartData.barChart2Plugins;
  public barChart2Data = chartData.barChart2Data;
  public barchart2Colors = chartData.barchart2Colors;

  //Area Chart
  public AreaChartOptions = chartData.AreaChartOptions;
  public AreaChartLabels = chartData.AreaChartLabels;
  public AreaChartType = chartData.AreaChartType;
  public AreaChartData = chartData.AreaChartData;
  public AreaChartColors = chartData.AreaChartColors;
  
  //Doughnut and Pie Chart Data
  public PieChartLabels = chartData.PieChartLabels;
  public PieChartData = chartData.PieChartData;
  public PieChartOptions = chartData.PieChartOptions;
  public PieChartType = chartData.PieChartType;
  public DoughnutChartType = chartData.DoughnutChartType;
  
  //Radar Chart
  public radarChartOptions = chartData.radarChartOptions;
  public radarChartLabels = chartData.radarChartLabels;
  public radarChartType = chartData.radarChartType;
  public radarChartData = chartData.radarChartData;
  public radarChartColors = chartData.radarChartColors;

  //Polar Chart
  public polarChartOptions = chartData.polarChartOptions;
  public polarChartLabels = chartData.polarChartLabels;
  public polarChartType = chartData.polarChartType;
  public polarChartData = chartData.polarChartData;
  public polarChartColors = chartData.polarChartColors;
  
}
