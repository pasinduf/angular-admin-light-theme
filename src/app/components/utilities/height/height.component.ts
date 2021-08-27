import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-height',
  templateUrl: './height.component.html',
  styleUrls: ['./height.component.scss']
})
export class HeightComponent implements OnInit {

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
