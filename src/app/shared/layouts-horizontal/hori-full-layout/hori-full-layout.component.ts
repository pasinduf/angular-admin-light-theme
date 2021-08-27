import {Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';
declare var $;
@Component({
  selector: 'app-hori-full-layout',
  templateUrl: './hori-full-layout.component.html',
  styleUrls: ['./hori-full-layout.component.scss']
})
export class HoriFullLayoutComponent implements OnInit {


  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef
    ) { }

  ngOnInit(): void {

    // document.querySelector('body').insertAdjacentHTML('beforeend', '<div class="main-navbar-backdrop"></div>');
    // DEMO Swticher Base
    $('.demo_changer .demo-icon').click(function () {
      if ($('.demo_changer').hasClass("active")) {
        $('.demo_changer').animate({ "right": "-290px" }, function () {
          $('.demo_changer').toggleClass("active");
        });
      } else {
        $('.demo_changer').animate({ "right": "0px" }, function () {
          $('.demo_changer').toggleClass("active");
        });
      }
    });
  }

  ngAfterViewInit() {
    new PerfectScrollbar('.sidebar-right1', {
      useBothWheelAxes: true,
      suppressScrollX: true
    });
  }

  clickonBody(){
    document.querySelector('body').classList.remove('main-navbar-show')  
  }
 

}
