import { Component, OnInit } from '@angular/core';
import * as codeData from '../../../shared/prismData/pagination'

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
  }
  scrollToElement(element): void {
    element.scrollIntoView({behavior: "smooth", inline: "nearest"});
  }

  isDisabled = true;

  toggleDisabled() {
    this.isDisabled = !this.isDisabled;
  }

  html1: string = codeData.pageHTML1;
  ts1: string = codeData.pageTS1;
  html2: string = codeData.pageHTML2;
  ts2: string = codeData.pageTS2;
  html3: string = codeData.pageHTML3;
  ts3: string = codeData.pageTS3;
  html4: string = codeData.pageHTML4;
  ts4: string = codeData.pageTS4;
  html5: string = codeData.pageHTML5;
  ts5: string = codeData.pageTS5;
  html6: string = codeData.pageHTML6;
  ts6: string = codeData.pageTS6;
  html7: string = codeData.pageHTML7;
  ts7: string = codeData.pageTS7;
  html8: string = codeData.pageHTML8;
  ts8: string = codeData.pageTS8;
 
}
