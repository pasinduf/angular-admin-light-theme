import { Component, OnInit } from '@angular/core';
import * as codeData from '../../../shared/prismData/popover'

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scrollToElement(element): void {
    element.scrollIntoView({behavior: "smooth", inline: "nearest"});
  }

  html1: string = codeData.popHTML1;
  ts1: string = codeData.popTS1;
  html2: string = codeData.popHTML2;
  ts2: string = codeData.popTS2;
  scss2: string = codeData.popSCSS2;
  html3: string = codeData.popHTML3;
  ts3: string = codeData.popTS3;
  scss3: string = codeData.popSCSS3;

}
