import { Component, OnInit, AfterViewInit } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit , AfterViewInit{

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    const ps = new PerfectScrollbar('.main-chat-list', {
      suppressScrollX: true
    });
    
    const ps1 = new PerfectScrollbar('#ChatBody', {
      suppressScrollX: true
    });
  }
}
