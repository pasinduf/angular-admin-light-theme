import { Component, OnInit } from '@angular/core';
import * as codeData from '../../../shared/prismData/navigation'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }
  scrollToElement(element): void {
    element.scrollIntoView({behavior: "smooth", inline: "nearest"});
  }


  html1: string = codeData.navHTML1;
  ts1: string = codeData.navTS1;
  html2: string = codeData.navHTML2;
  ts2: string = codeData.navTS2;
  html3: string = codeData.navHTML3;
  ts3: string = codeData.navTS3;
  html4: string = codeData.navHTML4;
  ts4: string = codeData.navTS4;
  html5: string = codeData.navHTML5;
  ts5: string = codeData.navTS5;
  html6: string = codeData.navHTML6;
  ts6: string = codeData.navTS6;
  html7: string = codeData.navHTML7;
  ts7: string = codeData.navTS7;
  html8: string = codeData.navHTML8;
  ts8: string = codeData.navTS8;
  html9: string = codeData.navHTML9;
  ts9: string = codeData.navTS9;

}
