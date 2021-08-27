export let toastHTML1 = 
`<ngb-toast *ngIf="show" header="Hello" [autohide]="false" (hidden)="show=false">
    I am a simple static toast with a header.
</ngb-toast>`
export let toastTS1 = 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {
  show = true;
}`

export let toastHTML2 = 
`<ngb-toast *ngIf="show1" [autohide]="false" (hidden)="show1=false">
    <ng-template ngbToastHeader>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
            <path
                d="M16.896 10l-4.896-8-4.896 8-7.104-4 3 11v5h18v-5l3-11-7.104 4zm-11.896 10v-2h14v2h-14zm14.2-4h-14.4l-1.612-5.909 4.615 2.598 4.197-6.857 4.197 6.857 4.615-2.598-1.612 5.909z" />
        </svg>
        <strong class="mx-1">Fancy</strong>header notification
    </ng-template>
    Hello, I am toast. Have you noticed my header has been generated from a Template?
</ngb-toast>`
export let toastTS2 = 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {
  show1 = true;
}`

export let toastHTML3 = 
`<ngb-toast *ngIf="show2" [autohide]="false" (hidden)="show2=false">
    <ng-template ngbToastHeader>
        <h6 class="tx-14 mg-b-0 mg-r-auto">Notification</h6>
        <small class="text-muted">Just now</small>
    </ng-template>
    See? Just like this.
</ngb-toast>
<ngb-toast *ngIf="show3" [autohide]="false" (hidden)="show3=false">
    <ng-template ngbToastHeader>
        <h6 class="tx-14 mg-b-0 mg-r-auto">Notification</h6>
        <small class="text-muted">11 mins ago</small>
    </ng-template>
    Hello, world! This is a toast message.
</ngb-toast>`
export let toastTS3 = 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {
  show2 = true;
  show3 = true;
}`

export let toastHTML4 = 
`<ngb-toast *ngIf="isclose" header="Click my close icon →" [autohide]="false" (hidden)="close()">
    If you close me, I will automatically re-appear after a few seconds.
</ngb-toast>
<p *ngIf="!isclose">I'll be back!</p>`
export let toastTS4 = 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {
  
  isclose = true;

  close() {
    this.isclose = false;
    setTimeout(() => this.isclose = true, 3000);
  }
}`

export let toastHTML5 = 
`<button class="btn btn-primary" (click)="show5 = true">
    Click me to show a toast
</button>
<hr *ngIf="show5">
<ngb-toast *ngIf="show5" header="Autohide can be cancelled" [delay]="5000" [autohide]="autohide"
    (mouseenter)="autohide = false" (mouseleave)="autohide = true" (hide)="show5 = false; autohide = true" [class.bg-warning]="!autohide">
    <div *ngIf="autohide">
        Try to mouse hover me.
    </div>
    <div *ngIf="!autohide">
        I will remain visible until you leave again.
    </div>
</ngb-toast>`
export let toastTS5 = 
`import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  show5 = false;
  autohide: boolean = true;

}`
