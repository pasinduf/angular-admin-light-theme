export let tooltipHTML1 = 
`<div class="row row-sm tx-center">
    <div class="col-sm-6 col-lg-3">
        <button type="button" class="btn btn-secondary" placement="bottom"
            ngbTooltip="Tooltip on Bottom">
            Hover me
        </button>
    </div>
    <div class="col-sm-6 col-lg-3 mg-t-30  mg-sm-t-0">
        <button type="button" class="btn btn-primary" placement="top"
            ngbTooltip="Tooltip on Top">
            Hover me
        </button>
    </div>
    <div class="col-sm-6 col-lg-3 mg-t-30 mg-lg-t-0">
        <button type="button" class="btn btn-info" placement="left"
            ngbTooltip="Tooltip on Left">
            Hover me
        </button>
    </div>
    <div class="col-sm-6 col-lg-3 mg-t-30 mg-lg-t-0">
        <button type="button" class="btn btn-danger" placement="right"
            ngbTooltip="Tooltip on Right">
            Hover me
        </button>
    </div>
</div>`
export let tooltipTS1 = 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent { }`


export let tooltipHTML2 = 
`<div class="row row-sm tx-center">
    <div class="col-sm-6 col-lg-3">
        <button type="button" class="btn btn-primary" placement="top"
            ngbTooltip="Tooltip on Top">
            Hover me
        </button>
    </div>
    <div class="col-sm-6 col-lg-3 mg-t-30 mg-sm-t-0">
        <button type="button" class="btn btn-secondary" placement="bottom"
            ngbTooltip="Tooltip on Bottom" tooltipClass="tooltipSecondary">
            Hover me
        </button>

    </div>
    <div class="col-sm-6 col-lg-3 mg-t-30 mg-lg-t-0">
        <button type="button" class="btn btn-info" placement="left"
            ngbTooltip="Tooltip on Left" tooltipClass="tooltipInfo">
            Hover me
        </button>

    </div>
    <div class="col-sm-6 col-lg-3 mg-t-30 mg-lg-t-0">
        <button type="button" class="btn btn-danger" placement="right"
            ngbTooltip="Tooltip on Right" tooltipClass="tooltipDanger">
            Hover me
        </button>
    </div>
</div>`
export let tooltipTS2 = 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent { }`
export let tooltipSCSS2 = 
`.tooltipSecondary .tooltip-inner {
    background-color: #f1388b;
    font-size: 125%;
}
.tooltipSecondary .arrow::before {
    border-bottom-color:  #f1388b;
}
.tooltipInfo .tooltip-inner {
    background-color: #06aff1;
    font-size: 125%;
}
.tooltipInfo .arrow::before {
    border-left-color:  #06aff1;
}
.tooltipDanger .tooltip-inner {
    background-color: #fd6074;
    font-size: 125%;
}
.tooltipDanger .arrow::before {
    border-right-color:  #fd6074;
}
`
