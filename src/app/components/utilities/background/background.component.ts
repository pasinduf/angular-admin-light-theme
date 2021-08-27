import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scrollToElement(element): void {
    element.scrollIntoView({behavior: "smooth", inline: "nearest"});
  }

  public isClosed = false;
  public isClosed1 = false;

  successToggle() {
    this.isClosed = true
  }
  dangerToggle() {
    this.isClosed1 = true
  }

}
