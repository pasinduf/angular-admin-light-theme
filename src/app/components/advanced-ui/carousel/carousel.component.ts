import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselConfig, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  providers: [NgbCarouselConfig]
})
export class CarouselComponent implements OnInit {

  showNavigationArrows = false;
  showNavigationIndicators = false;
  showArrow = false;
  showIndicator = false;

  customOptions: OwlOptions

  constructor() {
  }

  ngOnInit(): void {
    this.customOptions = {
      loop: true,
      rewind: false,
      slideTransition: 'linear',
      margin: 25,
      autoplay: true,
      autoplayTimeout: 5000,
      // autoplayHoverPause: false,
      dots: false,
      navText: [ '&#8249', '&#8250;' ],
      responsive: {
        0: {
          items: 1,
          nav: true
        },
        600: {
          items: 2,
          nav: true
        },
        1300: {
          items: 4,
          nav: true
        }
      }
  
    }
    
  }

  showArrows() {
    this.showArrow = !this.showArrow;
  }
  showIndicators() {
    this.showIndicator = !this.showIndicator;
  }

  public carouselImages = [
    { img: '../../assets/img/media/1.jpg', slide: '1' },
    { img: '../../assets/img/media/2.jpg', slide: '2' },
    { img: '../../assets/img/media/3.jpg', slide: '3' },
    { img: '../../assets/img/media/4.jpg', slide: '4' },
    { img: '../../assets/img/media/5.jpg', slide: '5' },
    { img: '../../assets/img/media/6.jpg', slide: '6' },
    { img: '../../assets/img/media/7.jpg', slide: '7' },
    { img: '../../assets/img/media/8.jpg', slide: '8' },
  ];


  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @ViewChild('carousel', { static: true }) carousel: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }

  owlCarouselData = [
    { id: 1, img: '../../assets/img/users/5.jpg', name: 'Reynante', designation: 'Web Developer'},
    { id: 2, img: '../../assets/img/users/4.jpg', name: 'Joyce Chua', designation: 'Team Leader'},
    { id: 3, img: '../../assets/img/users/6.jpg', name: 'Owen Bongcaras', designation: 'Web Designer'},
    { id: 4, img: '../../assets/img/users/7.jpg', name: 'Mariane Galeon', designation: 'Php Developer'},
    { id: 5, img: '../../assets/img/users/8.jpg', name: 'Reynante', designation: 'Web Developer'},
    { id: 6, img: '../../assets/img/users/9.jpg', name: 'Joyce Chua', designation: 'Team Leader'},
    { id: 7, img: '../../assets/img/users/10.jpg', name: 'Owen Bongcaras', designation: 'Web Designer'},
    { id: 8, img: '../../assets/img/users/11.jpg', name: 'Mariane Galeon', designation: 'Php Developer'},
    
  ]
}
