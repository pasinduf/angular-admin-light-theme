import { Component, OnInit } from '@angular/core';
import * as codeData from '../../../shared/prismData/avatars';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollToElement(element): void {
    element.scrollIntoView({behavior: "smooth", inline: "nearest"});
  }
  html1: string = codeData.avatarsHTML1;
  ts1: string = codeData.avatarsTS1;
  html2: string = codeData.avatarsHTML2;
  ts2: string = codeData.avatarsTS2;
  html3: string = codeData.avatarsHTML3;
  ts3: string = codeData.avatarsTS3;
  html4: string = codeData.avatarsHTML4;
  ts4: string = codeData.avatarsTS4;
}
