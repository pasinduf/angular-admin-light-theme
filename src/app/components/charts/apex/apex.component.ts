import { Component, OnInit } from '@angular/core';
import { ApexChartData, ApexRandomData, BarData, DonutChartData, PieChartData, RadialBarCircleData, RadialBarCircleMultipleData, StackedBarData } from '../../../shared/data/chart/apex';

@Component({
  selector: 'app-apex',
  templateUrl: './apex.component.html',
  styleUrls: ['./apex.component.scss']
})
export class ApexComponent implements OnInit {

  public RandomData = ApexRandomData;
  public apexData = ApexChartData;
  public barData = BarData;
  public stackedbarData = StackedBarData;
  public donutData = DonutChartData;
  public pieData = PieChartData;
  public radicalbarData = RadialBarCircleData;
  public radicalmultipleData = RadialBarCircleMultipleData;

  constructor() { }

  ngOnInit(): void {
 
  }

}
