import { Component, OnInit } from '@angular/core';
import * as codeData from '../../../shared/prismData/tooltips'

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scrollToElement(element): void {
    element.scrollIntoView({behavior: "smooth", inline: "nearest"});
  }
  html1: string = codeData.tooltipHTML1;
  ts1: string = codeData.tooltipTS1;
  html2: string = codeData.tooltipHTML2;
  ts2: string = codeData.tooltipTS2;
  scss2: string = codeData.tooltipSCSS2;
}