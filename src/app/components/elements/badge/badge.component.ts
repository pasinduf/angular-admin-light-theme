import { Component, OnInit } from '@angular/core';
import * as codeData from '../../../shared/prismData/badge';


@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scrollToElement(element): void {
    element.scrollIntoView({behavior: "smooth", inline: "nearest"});
  }

  html1: string = codeData.badgeHTML1;
  ts1: string = codeData.badgeTS1;
  html2: string = codeData.badgeHTML2;
  ts2: string = codeData.badgeTS2;
  html3: string = codeData.badgeHTML3;
  ts3: string = codeData.badgeTS3;
  html4: string = codeData.badgeHTML4;
  ts4: string = codeData.badgeTS4;
  html5: string = codeData.badgeHTML5;
  ts5: string = codeData.badgeTS5;

}
