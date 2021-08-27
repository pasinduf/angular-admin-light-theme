import { Component, OnInit } from '@angular/core';
import * as codeData from '../../../shared/prismData/typhography'

@Component({
  selector: 'app-typhography',
  templateUrl: './typhography.component.html',
  styleUrls: ['./typhography.component.scss']
})
export class TyphographyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  scrollToElement(element): void {
    element.scrollIntoView({behavior: "smooth", inline: "nearest"});
  }

  html1: string = codeData.typhoHTML1;
  ts1: string = codeData.typhoTS1;
  html2: string = codeData.typhoHTML2;
  ts2: string = codeData.typhoTS2;
  html3: string = codeData.typhoHTML3;
  ts3: string = codeData.typhoTS3;
  html4: string = codeData.typhoHTML4;
  ts4: string = codeData.typhoTS4;
  html5: string = codeData.typhoHTML5;
  ts5: string = codeData.typhoTS5;
  html6: string = codeData.typhoHTML6;
  ts6: string = codeData.typhoTS6;
  html7: string = codeData.typhoHTML7;
  ts7: string = codeData.typhoTS7;

}