import { Component, OnInit } from '@angular/core';
import * as codeData from '../../../shared/prismData/thumbnails'
@Component({
  selector: 'app-thumbnails',
  templateUrl: './thumbnails.component.html',
  styleUrls: ['./thumbnails.component.scss']
})
export class ThumbnailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scrollToElement(element): void {
    element.scrollIntoView({behavior: "smooth", inline: "nearest"});
  }

  html1: string = codeData.thumbHTML1;
  ts1: string = codeData.thumbTS1;
  html2: string = codeData.thumbHTML2;
  ts2: string = codeData.thumbTS2;
  html3: string = codeData.thumbHTML3;
  ts3: string = codeData.thumbTS3;
  html4: string = codeData.thumbHTML4;
  ts4: string = codeData.thumbTS4;
  html5: string = codeData.thumbHTML5;
  ts5: string = codeData.thumbTS5;
}