import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { ApexOptions } from "apexcharts";

//Chart js
export let lineChartOptions: ChartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
        enabled: true,
        mode: 'index',
        intersect: false,
    },
    hover: {
        mode: 'nearest',
        intersect: true
    },
    scales: {
        xAxes: [{
            ticks: {
                fontColor: '#c8ccdb',
            },
            display: true,
            gridLines: {
                color: 'rgba(119, 119, 142, 0.2)',
                zeroLineColor: 'rgba(119, 119, 142, 0.2)'
            },

        }],
        yAxes: [{
            ticks: {
                fontColor: '#77778e',
                min: 0,
                max: 250,
                stepSize: 50
            },
            display: true,
            gridLines: {
                color: 'rgba(119, 119, 142, 0.2)',
                zeroLineColor: 'rgba(119, 119, 142, 0.2)',
            },
            scaleLabel: {
                display: true,
                labelString: 'Thousands',
                fontColor: 'transparent'
            }
        }],

    },
    legend: {
        display: true,
        labels: {
            fontColor: '#77778e',
        },
    }
}

export let lineChartLabels: Label[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];
export let lineChartType: ChartType = 'line';
export let lineChartLegend = true;
export let lineChartData: ChartDataSets[] = [
    {
        label: 'Order',
        data: [30, 150, 65, 160, 70, 130, 70, 120],
        borderWidth: 3,
        backgroundColor: 'transparent',
        borderColor: 'rgba(183, 179, 220,0.5)',
        pointBackgroundColor: '#ffffff',
        pointRadius: 0,
        borderDash: [4, 3],
        barPercentage: 0.7
    },
    {
        label: 'Sale',
        data: [50, 90, 210, 90, 150, 75, 200, 70],
        borderWidth: 3,
        backgroundColor: 'transparent',
        borderColor: '#6259ca',
        pointBackgroundColor: '#ffffff',
        pointRadius: 0,
        barPercentage: 0.7
    },

]

//Radical usiing Apex charts
export let apexChartOptions : ApexOptions = {
    series: [83],
    colors: ['#6259ca'],
    chart: {
        height: 265,
        type: 'radialBar',
        offsetX: 0,
        offsetY: 0
    },
    plotOptions: {
        radialBar: {
            startAngle: -135,
            endAngle: 135,
            hollow: {
                size: '50%',
                imageWidth: 50,
                imageHeight: 50,
                dropShadow: {
                    enabled: false,
                    top: 0,
                    left: 0,
                    blur: 3,
                    opacity: 0.5
                }
            },
            track: {
                strokeWidth: '80%',
                background: 'transparent',
            },
            dataLabels: {
                name: {
                    fontSize: '16px',
                    color: undefined,
                    offsetY: 30
                },
                value: {
                    offsetY: -10,
                    fontSize: '22px',
                    color: undefined,
                    formatter: function(val) {
                        return val + "%";
                    }
                }
            }
        }
    },
    fill:{
        type: 'gradient',
        gradient: {
            shade: 'dark',
            type: 'horizontal',
            shadeIntensity: 0.5,
            gradientToColors: ['#6259ca'],
            inverseColors: !0,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
        }
    },
    stroke: {
        dashArray: 4
    },
    labels: [""]
}