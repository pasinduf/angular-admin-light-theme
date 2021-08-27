import { Component, OnInit, AfterViewInit } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';
import { Subscription } from 'rxjs';
import { LayoutService } from '../../services/layout.service';
import { NavService } from '../../services/nav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  public isCollapsed = true;
  public isSidebar = false;
  public config: any = {};
  layoutSubscription: Subscription;
  toggleClass = "fe fe-maximize";

  constructor(
    private layoutService: LayoutService,
    public navServices: NavService,
  ) {
    this.layoutSubscription = layoutService.changeEmitted.subscribe(
      direction => {
        const dir = direction.direction;

      }
    )
  }

  ngOnInit(): void {
  }
  categories = [
    { id: 1, name: 'IT Projects' },
    { id: 2, name: 'Business Case' },
    { id: 3, name: 'Microsoft Project' },
    { id: 4, name: 'Risk Management' },
    { id: 5, name: 'Team Building' },
  ]

  fullScreenToggle() {
    if (this.toggleClass === "fe fe-maximize") {
      this.toggleClass = "fe fe-minimize";
    } else {
      this.toggleClass = "fe fe-maximize";
    }
  }

  toggleSidebarNotification() {
    this.layoutService.emitSidebarNotifyChange(true);
  }

  toggleSidebar(){
    if ((this.navServices.collapseSidebar = !this.navServices.collapseSidebar)) {
      document.querySelector('.main-body').classList.add('main-sidebar-hide');
    }
    else {
      document.querySelector('.main-body').classList.remove('main-sidebar-hide');
    }
  }

  toggleMobileSidebar(){
    if ((this.navServices.collapseSidebar = !this.navServices.collapseSidebar)) {
      document.querySelector('.main-body').classList.add('main-sidebar-show');
    }
    else {
      document.querySelector('.main-body').classList.remove('main-sidebar-show');
    }
  }


  ngAfterViewInit() {
    const sidebar = document.querySelector('.side-menu');
    let ps = new PerfectScrollbar(sidebar);
  }
}

