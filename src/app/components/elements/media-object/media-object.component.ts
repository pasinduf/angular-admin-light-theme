import { Component, OnInit } from '@angular/core';
import * as codeData from '../../../shared/prismData/mediaobject'

@Component({
  selector: 'app-media-object',
  templateUrl: './media-object.component.html',
  styleUrls: ['./media-object.component.scss']
})
export class MediaObjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scrollToElement(element): void {
    element.scrollIntoView({behavior: "smooth", inline: "nearest"});
  }

  html1: string = codeData.mediaHTML1;
  ts1: string = codeData.mediaTS1;
  html2: string = codeData.mediaHTML2;
  ts2: string = codeData.mediaTS2;
  html3: string = codeData.mediaHTML3;
  ts3: string = codeData.mediaTS3;
  html4: string = codeData.mediaHTML4;
  ts4: string = codeData.mediaTS4;
  html5: string = codeData.mediaHTML5;
  ts5: string = codeData.mediaTS5;

}
