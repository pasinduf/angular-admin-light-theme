import { Component, ElementRef, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Menu, NavService } from '../../services/nav.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {

  public menuItems: Menu[];
  public url: any;
  body: HTMLAllCollection;

  constructor(
    private router: Router,
    private navServices: NavService,
    public elRef: ElementRef
  ) {
    this.navServices.items.subscribe(menuItems => {
      this.menuItems = menuItems;
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          menuItems.filter(items => {
            if (items.path === event.url) {
              this.setNavActive(items);
            }
            if (!items.children) { return false; }
            items.children.filter(subItems => {
              if (subItems.path === event.url) {
                this.setNavActive(subItems);
              }
              if (!subItems.children) { return false; }
              subItems.children.filter(subSubItems => {
                if (subSubItems.path === event.url) {
                  this.setNavActive(subSubItems);
                }
              });
            });
          });
        }
      });
    });
  }

  //Active NavBar State
  setNavActive(item) {
    this.menuItems.filter(menuItem => {
      if (menuItem !== item) {
        menuItem.active = false;
        
      }
      if (menuItem.children && menuItem.children.includes(item)) {
        menuItem.active = true;
      }
      if (menuItem.children) {
        menuItem.children.filter(submenuItems => {
          if (submenuItems.children && submenuItems.children.includes(item)) {
            menuItem.active = true;
            submenuItems.active = true;
          }
        });
      }
    });
  }


  // Click Toggle menu
  toggleNavActive(item) {
    if (!item.active) {
      this.menuItems.forEach(a => {
        if (this.menuItems.includes(item)) {
          a.active = false;
         
        }
        if (!a.children) { return false; }
        a.children.forEach(b => {
          if (a.children.includes(item)) {
            b.active = false;
          }
        });
      });
    }
    item.active = !item.active;
  }

  ngOnInit(): void {
  }


}
