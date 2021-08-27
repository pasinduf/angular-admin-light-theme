export let pageHTML1 = 
`<ngb-pagination [collectionSize]="30">
    <ng-template ngbPaginationPrevious>Prev</ng-template>
    <ng-template ngbPaginationNext>Next</ng-template>
</ngb-pagination>`
export let pageTS1 = 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent { }`

export let pageHTML2 = 
`<ngb-pagination [collectionSize]="30" aria-label="Default pagination"></ngb-pagination>`
export let pageTS2 = 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent { }`

export let pageHTML3 = 
`<ngb-pagination [collectionSize]="30" [disabled]='isDisabled'>
    <ng-template ngbPaginationPrevious>Prev</ng-template>
    <ng-template ngbPaginationNext>Next</ng-template>
</ngb-pagination>
<hr>
<button class="btn btn-sm btn-outline-primary" (click)="toggleDisabled()">
    Toggle disabled
</button>`
export let pageTS3 = 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
    isDisabled = true;

    toggleDisabled() {
        this.isDisabled = !this.isDisabled;
    }
}`

export let pageHTML4 = 
`<div class="row row-sm">
    <div class="col-sm-6 col-md-6">
        <ngb-pagination [collectionSize]="30" size="lg" [directionLinks]="false"></ngb-pagination>
    </div>
    <div class="col-sm-6 col-md-6 mg-t-10 mg-sm-t-0">
        <ngb-pagination [collectionSize]="30" size="sm" [directionLinks]="false"></ngb-pagination>
    </div>
</div>`
export let pageTS4 = 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent { }`

export let pageHTML5 = 
`<ngb-pagination class="d-flex justify-content-start" [collectionSize]="30" >
    <ng-template ngbPaginationPrevious>Prev</ng-template>
    <ng-template ngbPaginationNext>Next</ng-template>
</ngb-pagination>
<ngb-pagination class="d-flex justify-content-center" [collectionSize]="30" >
    <ng-template ngbPaginationPrevious>Prev</ng-template>
    <ng-template ngbPaginationNext>Next</ng-template>
</ngb-pagination>
<ngb-pagination class="d-flex justify-content-end" [collectionSize]="30" >
    <ng-template ngbPaginationPrevious>Prev</ng-template>
    <ng-template ngbPaginationNext>Next</ng-template>
</ngb-pagination>`
export let pageTS5 = 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent { }`

export let pageHTML6 = 
`<ngb-pagination [collectionSize]="30" class="pagination-circled mb-0">
    <ng-template ngbPaginationPrevious><i class="icon ion-ios-arrow-back"></i></ng-template>
    <ng-template ngbPaginationNext><i class="icon ion-ios-arrow-forward"></i></ng-template>
</ngb-pagination>`
export let pageTS6 = 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent { }`

export let pageHTML7 = 
`<div class="row row-sm">
    <ngb-pagination [collectionSize]="40" class="pagination-circle mb-0 ml-lg-3" ></ngb-pagination>
</div>`
export let pageTS7 = 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent { }`

export let pageHTML8 = 
`<div class="row row-sm">
    <ngb-pagination [collectionSize]="40" class="pagination-radius"></ngb-pagination>
</div>`
export let pageTS8 = 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent { }`
