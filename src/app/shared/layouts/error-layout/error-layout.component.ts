import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-layout',
  templateUrl: './error-layout.component.html',
  styleUrls: ['./error-layout.component.scss']
})
export class ErrorLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mainSidebarOpen: any;
  hoverEffect($event){
   this.mainSidebarOpen = $event.type == 'mouseover' ? 'main-sidebar-open' : '';
 }

}
