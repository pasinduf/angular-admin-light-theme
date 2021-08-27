import { Component, OnInit } from '@angular/core';
import * as codeData from '../../../shared/prismData/progress'

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scrollToElement(element): void {
    element.scrollIntoView({behavior: "smooth", inline: "nearest"});
  }

  html1: string = codeData.progressHTML1;
  ts1: string = codeData.progressTS1;
  html2: string = codeData.progressHTML2;
  ts2: string = codeData.progressTS2;
  html3: string = codeData.progressHTML3;
  ts3: string = codeData.progressTS3;
  html4: string = codeData.progressHTML4;
  ts4: string = codeData.progressTS4;
  html5: string = codeData.progressHTML5;
  ts5: string = codeData.progressTS5;
  html6: string = codeData.progressHTML6;
  ts6: string = codeData.progressTS6;
  scss6: string = codeData.progressSCSS6;
  html7: string = codeData.progressHTML7;
  ts7: string = codeData.progressTS7;
  html8: string = codeData.progressHTML8;
  ts8: string = codeData.progressTS8;

}
