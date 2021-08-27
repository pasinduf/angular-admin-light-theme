import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import * as codeData from '../../../shared/prismData/alerts';


interface Alert {
  type: string;
  message: string;
}


const basicALERTS: Alert[] = [{
  type: 'success',
  message: 'Well done! You successfully read this important alert message.',
}, {
  type: 'info',
  message: "Heads up! This alert needs your attention, but it's not super important.",
}, {
  type: 'warning',
  message: "Warning! Better check yourself, you're not looking too good.",
}, {
  type: 'danger',
  message: "Oh snap! Change a few things up and try submitting again.",
},
];

const outlineALERTS: Alert[] = [{
  type: 'outline-success',
  message: 'Well done! You successfully read this important alert message.',
}, {
  type: 'outline-info',
  message: "Heads up! This alert needs your attention, but it's not super important.",
}, {
  type: 'outline-warning',
  message: "Warning! Better check yourself, you're not looking too good.",
}, {
  type: 'outline-danger',
  message: "Oh snap! Change a few things up and try submitting again.",
}];

const solidALERTS: Alert[] = [{
  type: 'solid-success',
  message: 'Well done! You successfully read this important alert message.',
}, {
  type: 'solid-info',
  message: "Heads up! This alert needs your attention, but it's not super important.",
}, {
  type: 'solid-warning',
  message: "Warning! Better check yourself, you're not looking too good.",
}, {
  type: 'solid-danger',
  message: "Oh snap! Change a few things up and try submitting again.",
},
];

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {

  alert1closed: boolean = false;

  alerts: Alert[] = basicALERTS;
  outlineAlerts: Alert[] = outlineALERTS;
  solidAlerts: Alert[] = solidALERTS;

  constructor( ) { }


  ngOnInit(): void {
 
  }

  close(alert: Alert){
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }
  outlineClose(alert: Alert){
    this.outlineAlerts.splice(this.outlineAlerts.indexOf(alert), 1);
  }
  solidClose(alert: Alert){
    this.solidAlerts.splice(this.solidAlerts.indexOf(alert), 1);
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


  html1: string = codeData.alertHTML1;
  ts1: string = codeData.alertTS1;
  html2: string = codeData.alertHTML2;
  ts2: string = codeData.alertTS2;
  html3: string = codeData.alertHTML3;
  ts3: string = codeData.alertTS3;
  html4: string = codeData.alertHTML4;
  ts4: string = codeData.alertTS4;
  html5: string = codeData.alertHTML5;
  ts5: string = codeData.alertTS5;
  html6: string = codeData.alertHTML6;
  ts6: string = codeData.alertTS6;
  html7: string = codeData.alertHTML7;
  ts7: string = codeData.alertTS7;

}
