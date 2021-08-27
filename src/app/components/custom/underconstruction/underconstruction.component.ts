import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-underconstruction',
  templateUrl: './underconstruction.component.html',
  styleUrls: ['./underconstruction.component.scss']
})
export class UnderconstructionComponent implements OnInit {
  public days;
  public hours;
  public minutes;
  public seconds;
  constructor() { }

  ngOnInit(): void {
    let countDown = new Date('Dec 1, 2022 00:00:00').getTime();
    let time = setInterval(()=>{
      let now = new Date().getTime();
      let distance = countDown - now;
      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / ( 1000 * 60 * 60));
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / ( 1000 * 60 ));
      this.seconds = Math.floor((distance % (1000 * 60 )) / 1000);

      if(distance < 0){
        clearInterval(time);
      }
    }, 1000)
  }

}
