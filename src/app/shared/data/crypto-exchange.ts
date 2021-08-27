import { ApexOptions } from 'apexcharts';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { SSL_OP_NO_TLSv1_2 } from 'constants';
import { Color, Label } from 'ng2-charts';

//charts
export let cryptoExchangeOptions: ChartOptions[] = [
    {
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        responsive: true,
        tooltips: {
            mode: 'index',
            titleFontSize: 12,
            titleFontColor: '#7886a0',
            bodyFontColor: '#7886a0',
            backgroundColor: '#fff',
            titleFontFamily: 'Montserrat',
            bodyFontFamily: 'Montserrat',
            cornerRadius: 3,
            intersect: false,
        },
        scales: {
            xAxes: [{
                gridLines: {
                    color: 'transparent',
                    zeroLineColor: 'transparent'
                },
                ticks: {
                    fontSize: 2,
                    fontColor: 'transparent'
                }
            }],
            yAxes: [{
                display: false,
                ticks: {
                    display: false,
                }
            }]
        },
        title: {
            display: false,
        },
        elements: {
            line: {
                borderWidth: 1
            },
            point: {
                radius: 4,
                hitRadius: 10,
                hoverRadius: 4
            }
        }
    }
]
export let cryptoExchangeType: ChartType = 'line';
export let cryptoExchangeLabels: Label[] = ['Date 1', 'Date 2', 'Date 3', 'Date 4', 'Date 5', 'Date 6', 'Date 7', 'Date 8', 'Date 9', 'Date 10', 'Date 11', 'Date 12', 'Date 13', 'Date 14', 'Date 15', 'Date 16', 'Date 17', 'Date 18', 'Date 19'];

export let cryptoExchangeColor: Color[] = [
    {
        backgroundColor: 'rgba(98, 89, 202, 0.2)',
        borderColor: '#6259ca',
        borderWidth: 2,
        pointBorderColor: 'transparent',
        pointBackgroundColor: 'transparent',
    }
]

export let cryptoExchangeData1: ChartDataSets[] = [
    {
        data: [45, 25, 32, 67, 49, 72, 52, 55, 46, 54, 32, 74, 88, 96, 36, 32, 48, 54, 87, 88, 96, 53, 21, 24, 14, 58, 78, 55, 41, 21, 45, 54, 51, 52, 48],
        label: 'Bitcoin Price',
        
    }
]
export let cryptoExchangeData2: ChartDataSets[] = [
    {
        data: [88, 96, 36, 32, 48, 54, 87, 88, 96, 53, 21, 24, 14, 45, 25, 32, 67, 49, 72, 52, 55, 46, 54, 32, 74, 58, 78, 55, 41, 21, 45, 54, 51, 52, 48],
        label: 'Bitcoin Price',
    }
]
export let cryptoExchangeData3: ChartDataSets[] = [
    {
        data: [58, 78, 55, 41, 21, 45, 54, 51, 52, 48, 88, 96, 36, 32, 48, 24, 14, 45, 25, 32, 67, 49, 54, 87, 88, 96, 53, 21, 72, 52, 55, 46, 54, 32, 74],
        label: 'Bitcoin Price',
    }
]
export let cryptoExchangeData4: ChartDataSets[] = [
    {
        data: [88, 96, 36, 32, 48, 24, 14, 45, 25, 32, 45, 54, 51, 52, 48, 54, 67, 49, 58, 78, 55, 41, 21, 87, 88, 96, 53, 21, 72, 52, 55, 46, 54, 32, 74],
        label: 'Bitcoin Price',
    }
]
export let cryptoExchangeData5: ChartDataSets[] = [
    {
        data: [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46],
        label: 'Bitcoin Price',
    }
]
export let cryptoExchangeData6: ChartDataSets[] = [
    {
        data: [54, 35, 24, 64, 43, 55, 39,60, 61, 54, 62, 63, 44, 55, 64, 34, 46, 34,  64, 50,  34, 53, 4,  43, 45, 60, 54, 41, 45, 26, 45, 21, 45, 64],
        label: 'Bitcoin Price',
    }
]

export let cryptoExchangeApex: ApexOptions = {
    chart: {
        type: 'area',
        sparkline: {
            enabled: true,
        },
        height: 100,
        
    },
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    colors: ['#6259ca'],
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
           
        },
        marker: {
            show: false
        }
    }
}

export let cryptoExApexData1: ApexOptions = {
    series: [
        {
            data: [45, 25, 32, 67, 49, 72, 52, 55, 46, 54, 32, 74, 88, 96, 36, 32, 48, 54, 87, 88, 96, 53, 21, 24, 14, 58, 78, 55, 41, 21, 45, 54, 51, 52, 48],
            name: 'Bitcoin Price'
        }
    ]
}

export let cryptoExApexData2: ApexOptions = {
    series: [
        {
            data: [88, 96, 36, 32, 48, 54, 87, 88, 96, 53, 21, 24, 14, 45, 25, 32, 67, 49, 72, 52, 55, 46, 54, 32, 74, 58, 78, 55, 41, 21, 45, 54, 51, 52, 48],
            name: 'Bitcoin Price'
        }
    ]
}
export let cryptoExApexData3: ApexOptions = {
    series: [
        {
            data: [58, 78, 55, 41, 21, 45, 54, 51, 52, 48, 88, 96, 36, 32, 48, 24, 14, 45, 25, 32, 67, 49, 54, 87, 88, 96, 53, 21, 72, 52, 55, 46, 54, 32, 74],
            name: 'Bitcoin Price'
        }
    ]
}
export let cryptoExApexData4: ApexOptions = {
    series: [
        {
            data: [88, 96, 36, 32, 48, 24, 14, 45, 25, 32, 45, 54, 51, 52, 48, 54, 67, 49, 58, 78, 55, 41, 21, 87, 88, 96, 53, 21, 72, 52, 55, 46, 54, 32, 74],
            name: 'Bitcoin Price'
        }
    ]
}
export let cryptoExApexData5: ApexOptions = {
    series: [
        {
            data: [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46],
            name: 'Bitcoin Price'
        }
    ]
}
export let cryptoExApexData6: ApexOptions = {
    series: [
        {
            data: [54, 35, 24, 64, 43, 55, 39,60, 61, 54, 62, 63, 44, 55, 64, 34, 46, 34,  64, 50,  34, 53, 4,  43, 45, 60, 54, 41, 45, 26, 45, 21, 45, 64],
            name: 'Bitcoin Price'
        }
    ]
}