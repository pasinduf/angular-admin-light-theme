import { Component, OnInit } from '@angular/core';
import * as codeData from '../../../shared/prismData/spinners'

@Component({
  selector: 'app-spinners',
  templateUrl: './spinners.component.html',
  styleUrls: ['./spinners.component.scss']
})
export class SpinnersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scrollToElement(element): void {
    element.scrollIntoView({behavior: "smooth", inline: "nearest"});
  }
  html1: string = codeData.spinnersHTML1;
  ts1: string = codeData.spinnersTS1;
  html2: string = codeData.spinnersHTML2;
  ts2: string = codeData.spinnersTS2;
  html3: string = codeData.spinnersHTML3;
  ts3: string = codeData.spinnersTS3;
  html4: string = codeData.spinnersHTML4;
  ts4: string = codeData.spinnersTS4;
  html5: string = codeData.spinnersHTML5;
  ts5: string = codeData.spinnersTS5;
  html6: string = codeData.spinnersHTML6;
  ts6: string = codeData.spinnersTS6;
  html7: string = codeData.spinnersHTML7;
  ts7: string = codeData.spinnersTS7;
}
