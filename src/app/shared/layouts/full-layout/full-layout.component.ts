import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.scss']
})
export class FullLayoutComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  mainSidebarOpen: any;
  hoverEffect($event) {
    this.mainSidebarOpen = $event.type == 'mouseover' ? 'main-sidebar-open' : '';
  }
  


}
