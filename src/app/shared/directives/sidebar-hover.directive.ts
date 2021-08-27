import { Directive, HostListener, Inject } from '@angular/core';

@Directive({
  selector: '[appSidebarHover]'
})
export class SidebarHoverDirective {

  public sidebarOpen: boolean = false;
  constructor() { }

  @HostListener('mouseenter')

  onMouseEnter(){
    this.sidebarOpen = true;
  }

  @HostListener('mouseleave')

  onMouseLeave(){
    this.sidebarOpen = false;
  }

}
