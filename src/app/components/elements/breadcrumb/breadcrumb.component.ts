import { Component, OnInit } from '@angular/core';
import * as codeData from '../../../shared/prismData/breadcrumb';
@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  scrollToElement(element): void {
    element.scrollIntoView({behavior: "smooth", inline: "nearest"});
  }
  html1: string = codeData.breadHTML1;
  ts1: string = codeData.breadTS1;
  html2: string = codeData.breadHTML2;
  ts2: string = codeData.breadTS2;
  html3: string = codeData.breadHTML3;
  ts3: string = codeData.breadTS3;
  html4: string = codeData.breadHTML4;
  ts4: string = codeData.breadTS4;
  html5: string = codeData.breadHTML5;
  ts5: string = codeData.breadTS5;
  html6: string = codeData.breadHTML6;
  ts6: string = codeData.breadTS6;
}
