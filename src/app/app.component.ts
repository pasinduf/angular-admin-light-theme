import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spruha';
  public isSpinner = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.isSpinner = false;
    },1000)
  }
}
