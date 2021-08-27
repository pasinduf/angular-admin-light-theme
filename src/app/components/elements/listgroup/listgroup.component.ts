import { Component, OnInit } from '@angular/core';
import * as codeData from '../../../shared/prismData/listgroup';

@Component({
  selector: 'app-listgroup',
  templateUrl: './listgroup.component.html',
  styleUrls: ['./listgroup.component.scss']
})
export class ListgroupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollToElement(element): void {
    element.scrollIntoView({behavior: "smooth", inline: "nearest"});
  }
  html1: string = codeData.listHTML1;
  ts1: string = codeData.listTS1;
  html2: string = codeData.listHTML2;
  ts2: string = codeData.listTS2;
  html3: string = codeData.listHTML3;
  ts3: string = codeData.listTS3;
  html4: string = codeData.listHTML4;
  ts4: string = codeData.listTS4;
  html5: string = codeData.listHTML5;
  ts5: string = codeData.listTS5;
  html6: string = codeData.listHTML6;
  ts6: string = codeData.listTS6;
  html7: string = codeData.listHTML7;
  ts7: string = codeData.listTS7;
  html8: string = codeData.listHTML8;
  ts8: string = codeData.listTS8;
  html9: string = codeData.listHTML9;
  ts9: string = codeData.listTS9;
  html10: string = codeData.listHTML10;
  ts10: string = codeData.listTS10;
  html11: string = codeData.listHTML11;
  ts11: string = codeData.listTS11;
  html12: string = codeData.listHTML12;
  ts12: string = codeData.listTS12;
}
