import { Component, OnInit } from '@angular/core';
import * as codeData from '../../../shared/prismData/tags'

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scrollToElement(element): void {
    element.scrollIntoView({behavior: "smooth", inline: "nearest"});
  }
  html1: string = codeData.tagsHTML1;
  ts1: string = codeData.tagsTS1;
  html2: string = codeData.tagsHTML2;
  ts2: string = codeData.tagsTS2;
  html3: string = codeData.tagsHTML3;
  ts3: string = codeData.tagsTS3;
}
