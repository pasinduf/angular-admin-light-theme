export let progressHTML1 = 
`<div class="mg-b-20">
    <ngb-progressbar type="primary" [value]="25"></ngb-progressbar>
</div>
<div class="mg-b-20">
    <ngb-progressbar type="secondary" [value]="35"></ngb-progressbar>
</div>
<div class="mg-b-20">
    <ngb-progressbar type="info" [value]="50"></ngb-progressbar>
</div>
<div class="mg-b-20">
    <ngb-progressbar type="danger" [value]="65"></ngb-progressbar>
</div>
<div class="mg-b-20">
    <ngb-progressbar type="success" [value]="75"></ngb-progressbar>
</div>`
export let progressTS1 = 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent { }`

export let progressHTML2 = 
`<div class="mg-b-20">
    <ngb-progressbar type="primary" [value]="25" [striped]="true"></ngb-progressbar>
</div>
<div class="mg-b-20">
    <ngb-progressbar type="secondary" [value]="35" [striped]="true"></ngb-progressbar>
</div>
<div class="mg-b-20">
    <ngb-progressbar type="info" [value]="50" [striped]="true"></ngb-progressbar>
</div>
<div class="mg-b-20">
    <ngb-progressbar type="danger" [value]="65" [striped]="true"></ngb-progressbar>
</div>
<div class="mg-b-20">
    <ngb-progressbar type="success" [value]="75" [striped]="true"></ngb-progressbar>
</div>`
export let progressTS2 = 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent { }`

export let progressHTML3 = 
`<div class="mg-b-10">
    <ngb-progressbar type="primary" [value]="25" height="2px"></ngb-progressbar>
</div>
<div class="mg-b-10">
    <ngb-progressbar type="secondary" [value]="35" height="2px"></ngb-progressbar>
</div>
<div class="mg-b-10">
    <ngb-progressbar type="info" [value]="50" height="2px"></ngb-progressbar>
</div>`
export let progressTS3 = 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent { }`

export let progressHTML4 = 
`<div class="mg-b-10">
    <ngb-progressbar type="primary" [value]="25" height="5px"></ngb-progressbar>
</div>
<div class="mg-b-10">
    <ngb-progressbar type="secondary" [value]="35" height="5px"></ngb-progressbar>
</div>
<div class="mg-b-10">
    <ngb-progressbar type="info" [value]="50" height="5px"></ngb-progressbar>
</div>`
export let progressTS4 = 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent { }`

export let progressHTML5 = 
`<div class="mg-b-10">
    <ngb-progressbar type="primary" [value]="25"></ngb-progressbar>
</div>
<div class="mg-b-10">
    <ngb-progressbar type="secondary" [value]="35"></ngb-progressbar>
</div>
<div class="mg-b-10">
    <ngb-progressbar type="info" [value]="50"></ngb-progressbar>
</div>`
export let progressTS5 = 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent { }`
export let progressHTML6 = 
`<div class="mg-b-10">
    <ngb-progressbar type="primary" [value]="25" class="large"></ngb-progressbar>
</div>
<div class="mg-b-10">
    <ngb-progressbar type="secondary" [value]="35" class="large"></ngb-progressbar>
</div>
<div class="mg-b-10">
    <ngb-progressbar type="info" [value]="50" class="large"></ngb-progressbar>
</div>`
export let progressTS6 = 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent { }`
export let progressSCSS6 = 
`::ng-deep{
    .progress.large{
        height: 15px;
    }
    .large .progress-bar{
        height: 15px;
    }
}`

export let progressHTML7 = 
`<div class="mg-b-10">
    <ngb-progressbar type="primary" [value]="50">50%</ngb-progressbar>
</div>
<div class="mg-b-10">
    <ngb-progressbar type="secondary" [value]="60">60%</ngb-progressbar>
</div>
<div class="mg-b-10">
    <ngb-progressbar type="info" [value]="95">95%</ngb-progressbar>
</div>`
export let progressTS7 = 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent { }`
export let progressHTML8 = 
`<div class="mg-b-10">
    <ngb-progressbar type="primary" [value]="25" [striped]="true" [animated]="true"></ngb-progressbar>
</div>
<div class="mg-b-10">
    <ngb-progressbar type="secondary" [value]="45" [striped]="true" [animated]="true"></ngb-progressbar>
</div>
<div class="mg-b-10">
    <ngb-progressbar type="info" [value]="55" [striped]="true" [animated]="true"></ngb-progressbar>
</div>
<div class="mg-b-10">
    <ngb-progressbar type="danger" [value]="65" [striped]="true" [animated]="true"></ngb-progressbar>
</div>
<div class="mg-b-10">
    <ngb-progressbar type="warning" [value]="75" [striped]="true" [animated]="true"></ngb-progressbar>
</div>
<div class="mg-b-10">
    <ngb-progressbar type="success" [value]="85" [striped]="true" [animated]="true"></ngb-progressbar>
</div>`
export let progressTS8 = 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent { }`
