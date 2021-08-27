import { Component, OnInit } from '@angular/core';
import * as codeData from '../../../shared/prismData/dropdown';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {

  constructor( ) { }

  ngOnInit(): void {
  }
  scrollToElement(element): void {
    element.scrollIntoView({behavior: "smooth", inline: "nearest"});
  }

  html1: string = codeData.dropdownHTML1;
  ts1: string = codeData.dropdownTS1;
  html2: string = codeData.dropdownHTML2;
  ts2: string = codeData.dropdownTS2;
  html3: string = codeData.dropdownHTML3;
  ts3: string = codeData.dropdownTS3;
  html4: string = codeData.dropdownHTML4;
  ts4: string = codeData.dropdownTS4;
  html5: string = codeData.dropdownHTML5;
  ts5: string = codeData.dropdownTS5;
  html6: string = codeData.dropdownHTML6;
  ts6: string = codeData.dropdownTS6;
  html7: string = codeData.dropdownHTML7;
  ts7: string = codeData.dropdownTS7;
  
}
