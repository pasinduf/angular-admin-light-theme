import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HorizontalNavService } from '../../services/horizontal-nav.service';
import { LayoutService } from '../../services/layout.service';
@Component({
  selector: 'app-hori-header',
  templateUrl: './hori-header.component.html',
  styleUrls: ['./hori-header.component.scss']
})
export class HoriHeaderComponent implements OnInit {

  public isCollapsed = true;
  public isSidebar = false;
  toggleClass = "fe fe-maximize";
  constructor(
    private layoutService: LayoutService,
    private horizontalNavService: HorizontalNavService,
  ) { }

  ngOnInit(): void {
  }

  categories = [
    { id: 1, name: 'IT Projects' },
    { id: 2, name: 'Business Case' },
    { id: 3, name: 'Microsoft Project' },
    { id: 4, name: 'Risk Management' },
    { id: 5, name: 'Team Building' },
  ]

  // fullScreenToggle() {
  //   if (this.toggleClass === "fe fe-maximize") {
  //     this.toggleClass = "fe fe-minimize";
  //   } else {
  //     this.toggleClass = "fe fe-maximize";
  //   }
  // }

  toggleSidebarNotification() {
    this.layoutService.emitSidebarNotifyChange(true);
  }

  sidebar: boolean = false;
  toggleSidebar(){
    if (this.sidebar = !this.sidebar) {
      document.querySelector('body').classList.add('main-navbar-show');
    }
    else {
      document.querySelector('body').classList.remove('main-navbar-show');
    }
  }

}
