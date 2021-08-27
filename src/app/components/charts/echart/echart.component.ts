import { Component, OnInit } from '@angular/core';
import * as chartdata from '../../../shared/data/chart/echart'

@Component({
  selector: 'app-echart',
  templateUrl: './echart.component.html',
  styleUrls: ['./echart.component.scss']
})
export class EchartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public echartLineOption = chartdata.echartLineOption;
  public echartLineBarOption = chartdata.echartLineBarOption;
  public echartHorizontalLineChart = chartdata.echartHorizontalLineChart;
  public echartHorizontalLineBarChart = chartdata.echartHorizontalLineBarChart;
  public echartStackedBarChart = chartdata.echartStackedBarChart;
  public echartHoriStackedBarChart = chartdata.echartHoriStackedBarChart;

}
