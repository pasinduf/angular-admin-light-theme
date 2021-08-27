import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

//Line Charts
export let lineChartOptions: ChartOptions = {
  maintainAspectRatio: false,
  responsive: true,
  legend: {
    labels: {
      fontColor: "#77778e"
    }
  },
  scales: {
    xAxes: [{
      ticks: {
        fontColor: '#77778e'
      },
      display: true,
      gridLines: {
        color: 'rgba(119, 119, 142, 0.2)'
      }
    }],
    yAxes: [{
      ticks: {
        fontColor: '#77778e'
      },
      display: true,
      gridLines: {
        color: 'rgba(119, 119, 142, 0.2)'
      },
      scaleLabel: {
        display: false,
        labelString: 'Thousands',
        fontColor: 'rgba(119, 119, 142, 0.2)'
      }
    }]
  }
};
export let lineChartLabels: Label[] = ["Sun", "Mon", "Tus", "Wed", "Thu", "Fri", "Sat"];
export let lineChartType: ChartType = 'line';
export let lineChartLegend = true;
export let lineChartData: ChartDataSets[] = [
  {
    label: 'Profits',
    data: [20, 420, 210, 354, 580, 320, 480],

  }
];
export let lineChartColors: Color[] = [
  {
    borderWidth: 3,
    backgroundColor: 'transparent',
    borderColor: '#6259ca',
    pointBackgroundColor: '#ffffff',
    pointRadius: 2
  },
];



//BarChart1
export let barChartOptions: ChartOptions = {
  maintainAspectRatio: false,
  responsive: true,
  legend: {
    display: true,
    labels: {
      fontColor: '#77778e'
    }
  },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true,
        stepSize: 150,
        fontColor: '#77778e'
      },
      gridLines: {
        color: 'rgba(119, 119, 142, 0.2)'
      }
    }],
    xAxes: [{
      ticks: {
        display: true,
        fontColor: '#77778e'
      },
      gridLines: {
        display: false,
        color: 'rgba(119, 119, 142, 0.2)'
      }
    }]
  }
};
export let barChartLabels: Label[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
export let barChartType: ChartType = 'bar';
export let barChartLegend = true;
export let barChartPlugins = [];
export let barChartData: ChartDataSets[] = [
  {
    data: [200, 450, 290, 367, 256, 543, 345],
    label: 'Sales',
    borderWidth: 2,
    backgroundColor: '#9877f9',
    borderColor: '#9877f9',
    pointBackgroundColor: '#ffffff',
  }
];
export let barChartColors: Color[] = [
  {
    borderWidth: 2,
    backgroundColor: '#9877f9',
    borderColor: '#9877f9',
    pointBackgroundColor: '#ffffff',
  }
]


//Bar Chart 2
export let barChart2Options: ChartOptions = {
  maintainAspectRatio: false,
  responsive: true,
  legend: {
    labels: {
      fontColor: "#77778e"
    },
  },
  scales: {
    xAxes: [{
      ticks: {
        fontColor: "#77778e",
      },
      gridLines: {
        color: 'rgba(119, 119, 142, 0.2)'
      }
    }],
    yAxes: [{
      ticks: {
        beginAtZero: true,
        fontColor: "#77778e",
      },
      gridLines: {
        color: 'rgba(119, 119, 142, 0.2)'
      },
    }]
  },
}
export let barChart2Labels: Label[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
export let barChart2Type: ChartType = 'bar';
export let barChart2Legend = true;
export let barChart2Plugins = []

export let barChart2Data: ChartDataSets[] = [
  {
    label: "Data1",
    data: [65, 59, 80, 81, 56, 55, 40],
  },
  {
    label: "Data2",
    data: [28, 48, 40, 19, 86, 27, 90],
  }
];

export let barchart2Colors: Color[] = [
  {
    borderColor: "#6259ca",
    borderWidth: 0,
    backgroundColor: "#6259ca"
  },
  {
    borderColor: "#53caed",
    borderWidth: 0,
    backgroundColor: "#53caed"
  }
]


//Area Chart
export let AreaChartOptions: ChartOptions = {
  maintainAspectRatio: false,
  responsive: true,
  tooltips: {
    mode: 'index',
    intersect: false
  },
  hover: {
    mode: 'nearest',
    intersect: true
  },
  scales: {
    xAxes: [{
      ticks: {
        fontColor: '#77778e',
      },
      gridLines: {
        color: 'rgba(119,119,142, 0.2)'
      }
    }],
    yAxes: [{
      ticks: {
        beginAtZero: true,
        fontColor: '#77778e'
      },
      gridLines: {
        color: 'rgba(119,119,142, 0.2)'
      }
    }]
  },
  legend: {
    labels: {
      fontColor: '#77778e'
    }
  }

}
export let AreaChartLabels: Label[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July'];
export let AreaChartType: ChartType = 'line';
export let AreaChartData: ChartDataSets[] = [
  {
    label: "Data1",
    data: [22, 44, 67, 43, 76, 45, 12]
  },
  {
    label: "Data2",
    data: [16, 32, 18, 26, 42, 33, 44]
  }
]

export let AreaChartColors: Color[] = [
  {
    borderColor: "rgba(113, 76, 190, 0.9)",
    borderWidth: 1,
    backgroundColor: "rgba(113, 76, 190, 0.5)",
  },
  {
    borderColor: "rgba(235, 111, 51 ,0.9)",
    borderWidth: 1,
    backgroundColor: "rgba(	235, 111, 51, 0.7)",
    // pointHighlightStroke: "rgba(235, 111, 51 ,1)",
  }

]



//DoughNut Chart and Pie chart data
export let PieChartLabels: Label[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
export let PieChartData: ChartDataSets[] = [
  {
    data: [20, 20, 30, 5, 25],
    backgroundColor: ['#6259ca', '#53caed', '#01b8ff', '#f16d75', '#29ccbb']
  }

]
export let PieChartOptions: ChartOptions = {
  maintainAspectRatio: false,
  responsive: true,
  legend: {
    display: false,
  },
  animation: {
    animateScale: true,
    animateRotate: true
  }
}
export let DoughnutChartType: ChartType = 'doughnut';
export let PieChartType: ChartType = 'pie';


//Radar Chart
export let radarChartOptions: ChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scale: {
    angleLines: {
      color: '#77778e'
    },
    gridLines: {
      color: 'rgba(119,119,142,0.2)'
    },
    ticks: {
      beginAtZero: true,
    },
    pointLabels: {
      fontColor: '#77778e'
    }

  }
}
export let radarChartLabels: Label[] = [
  ["Eating", "Dinner"],
  ["Drinking", "Water"],
  "Sleeping",
  ["Designing", "Graphics"],
  "Coding", "Cycling", "Running"
];
export let radarChartType: ChartType = 'radar';
export let radarChartData: ChartDataSets[] = [
  {
    label: "Data1",
    data: [65, 59, 66, 45, 56, 55, 40],
  },
  {
    label: "Data2",
    data: [28, 12, 40, 19, 63, 27, 87],
  }
];
export let radarChartColors: Color[] = [
  {
    borderColor: "rgba(113, 76, 190, 0.9)",
    borderWidth: 1,
    backgroundColor: "rgba(113, 76, 190, 0.5)"
  },
  {
    borderColor: "rgba(235, 111, 51,0.8)",
    borderWidth: 1,
    backgroundColor: "rgba(235, 111, 51,0.4)"
  }
]

//Polar Chart
export let polarChartOptions: ChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    labels: {
      fontColor: "#77778e"
    },
  },
  scale: {
    gridLines: {
      color: 'rgba(119, 119, 142, 0.2)'
    }
  },
}
export let polarChartLabels: Label[] = ["Data1", "Data2", "Data3", "Data4"];
export let polarChartType: ChartType = 'polarArea';
export let polarChartData: ChartDataSets[] = [
  {
    data: [18, 15, 9, 6, 19],
  }
];
export let polarChartColors: Color[] = [
  {
    backgroundColor: ['#6259ca', '#53caed', '#01b8ff', '#f16d75', '#29ccbb'],
    hoverBackgroundColor: ['#6259ca', '#53caed', '#01b8ff', '#f16d75', '#29ccbb'],
    borderColor: 'transparent',
  }
]

