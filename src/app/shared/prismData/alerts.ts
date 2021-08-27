export let alertHTML1 = 
`<ng-container *ngFor="let alert of alerts">
    <ngb-alert type="{{alert.type}}" (closed)="close(alert)">{{ alert.message }}</ngb-alert>
</ng-container>`
export let alertTS1 = 
`import { Component } from '@angular/core';
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
}];

@Component({
    selector: 'app-alerts',
    templateUrl: './alerts.component.html',
    styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent {
    alerts: Alert[] = basicALERTS;

    close(alert: Alert){
        this.alerts.splice(this.alerts.indexOf(alert), 1);
    }
}`

export let alertHTML2 = 
`<ng-container *ngFor="let alert of outlineAlerts">
    <ngb-alert type="{{alert.type}}" (closed)="outlineClose(alert)">{{ alert.message }}
    </ngb-alert>
</ng-container>`
export let alertTS2 = 
`import { Component } from '@angular/core';
interface Alert {
    type: string;
    message: string;
}
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

@Component({
    selector: 'app-alerts',
    templateUrl: './alerts.component.html',
    styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent {
    outlineAlerts: Alert[] = outlineALERTS;

    outlineClose(alert: Alert){
        this.outlineAlerts.splice(this.outlineAlerts.indexOf(alert), 1);
    }
}`

export let alertHTML3 = 
`<ng-container *ngFor="let alert of solidAlerts">
    <ngb-alert type="{{alert.type}}" (closed)="solidClose(alert)">{{ alert.message }}
    </ngb-alert>
</ng-container>`
export let alertTS3 = 
`import { Component } from '@angular/core';
interface Alert {
    type: string;
    message: string;
}
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
}];

@Component({
    selector: 'app-alerts',
    templateUrl: './alerts.component.html',
    styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent {

    solidAlerts: Alert[] = solidALERTS;
    
    solidClose(alert: Alert){
        this.solidAlerts.splice(this.solidAlerts.indexOf(alert), 1);
    }
}`

export let alertHTML4 = 
`<ngb-alert type="primary" [dismissible]="false">
    This is a primary alert with <a href="javascript:;" class="alert-link">an example link</a>.
    Give it a click if you like.
</ngb-alert>
<ngb-alert type="secondary" [dismissible]="false">
    This is a secondary alert with <a href="javascript:;" class="alert-link">an example
    link</a>. Give it a click if you like.
</ngb-alert>
<ngb-alert type="success" [dismissible]="false">
    This is a success alert with <a href="javascript:;" class="alert-link">an example link</a>.
    Give it a click if you like.
</ngb-alert>
<ngb-alert type="danger" [dismissible]="false">
    This is a danger alert with <a href="javascript:;" class="alert-link">an example link</a>.
    Give it a click if you like.
</ngb-alert>
<ngb-alert type="warning" [dismissible]="false">
    This is a warning alert with <a href="javascript:;" class="alert-link">an example link</a>.
    Give it a click if you like.
</ngb-alert>
<ngb-alert type="info" [dismissible]="false">
    This is a info alert with <a href="javascript:;" class="alert-link">an example link</a>.
    Give it a click if you like.
</ngb-alert>
<ngb-alert type="light" [dismissible]="false">
    This is a light alert with <a href="javascript:;" class="alert-link">an example link</a>.
    Give it a click if you like.
</ngb-alert>
<ngb-alert type="dark" [dismissible]="false">
    This is a dark alert with <a href="javascript:;" class="alert-link">an example link</a>.
    Give it a click if you like.
</ngb-alert>`
export let alertTS4 = 
`import { Component } from '@angular/core';

@Component({
    selector: 'app-alerts',
    templateUrl: './alerts.component.html',
    styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent { }`

export let alertHTML5 = 
`<ngb-alert type="success" [dismissible]="false">
    <h4 class="alert-heading">Well done!</h4>
    <p>Aww yeah, you successfully read this important alert message. This example text is going
    to run a bit longer so that you can see how spacing within an alert works with this kind
    of content.</p>
    <hr>
    <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice
    and tidy.</p>
</ngb-alert>`
export let alertTS5 = 
`import { Component } from '@angular/core';

@Component({
    selector: 'app-alerts',
    templateUrl: './alerts.component.html',
    styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent { }`

export let alertHTML6 = 
`<ngb-alert type="default" [dismissible]="false">
    <span class="alert-inner--icon"><i class="fe fe-download mr-1"></i></span>
    <span class="alert-inner--text"><strong>Default!</strong> This is a warning alert—check it
        out that has an icon too!</span>
</ngb-alert>
<ngb-alert type="primary" [dismissible]="false">
    <span class="alert-inner--icon"><i class="fe fe-check-square mr-1"></i></span>
    <span class="alert-inner--text"><strong>Primary!</strong> This is a warning alert—check it
        out that has an icon too!</span>
</ngb-alert>
<ngb-alert type="success" [dismissible]="false">
    <span class="alert-inner--icon"><i class="fe fe-thumbs-up mr-1"></i></span>
    <span class="alert-inner--text"><strong>Success!</strong> This is a warning alert—check it
        out that has an icon too!</span>
</ngb-alert>
<ngb-alert type="info" [dismissible]="false">
    <span class="alert-inner--icon"><i class="fe fe-bell mr-1"></i></span>
    <span class="alert-inner--text"><strong>Info!</strong> This is a warning alert—check it out
        that has an icon too!</span>
</ngb-alert>
<ngb-alert type="warning" [dismissible]="false">
    <span class="alert-inner--icon"><i class="fe fe-info mr-1"></i></span>
    <span class="alert-inner--text"><strong>Warning!</strong> This is a warning alert—check it
        out that has an icon too!</span>
</ngb-alert>
<ngb-alert type="danger" [dismissible]="false">
    <span class="alert-inner--icon"><i class="fe fe-slash mr-1"></i></span>
    <span class="alert-inner--text"><strong>Danger!</strong> This is a warning alert—check it
        out that has an icon too!</span>
</ngb-alert>`
export let alertTS6 = 
`import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-alerts',
    templateUrl: './alerts.component.html',
    styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit { }`

export let alertHTML7 = 
`<ngb-alert type="default">
    <span class="alert-inner--icon"><i class="fe fe-download mr-1"></i></span>
    <span class="alert-inner--text"><strong>Default!</strong> This is a warning alert—check it
        out that has an icon too!</span>
</ngb-alert>
<ngb-alert type="primary">
    <span class="alert-inner--icon"><i class="fe fe-check-square mr-1"></i></span>
    <span class="alert-inner--text"><strong>Primary!</strong> This is a warning alert—check it
        out that has an icon too!</span>
</ngb-alert>
<ngb-alert type="success">
    <span class="alert-inner--icon"><i class="fe fe-thumbs-up mr-1"></i></span>
    <span class="alert-inner--text"><strong>Success!</strong> This is a warning alert—check it
        out that has an icon too!</span>
</ngb-alert>
<ngb-alert type="info">
    <span class="alert-inner--icon"><i class="fe fe-bell mr-1"></i></span>
    <span class="alert-inner--text"><strong>Info!</strong> This is a warning alert—check it out
        that has an icon too!</span>
</ngb-alert>
<ngb-alert type="warning">
    <span class="alert-inner--icon"><i class="fe fe-info mr-1"></i></span>
    <span class="alert-inner--text"><strong>Warning!</strong> This is a warning alert—check it
        out that has an icon too!</span>
</ngb-alert>
<ngb-alert type="danger">
    <span class="alert-inner--icon"><i class="fe fe-slash mr-1"></i></span>
    <span class="alert-inner--text"><strong>Danger!</strong> This is a warning alert—check it
        out that has an icon too!</span>
</ngb-alert>`
export let alertTS7 = 
`import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-alerts',
    templateUrl: './alerts.component.html',
    styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit { }`