import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  page = 1
  constructor() { }

  ngOnInit(): void {
  }

  orders = [
    { id: '#W83549801', invoice:'2', name:'Anna Sthesia', date:'08/11/2020', total: 1000 , warehouse:'Boston', status:'Pending', statusbg: 'bg-warning' },
    { id: '#W83549802', invoice:'5', name:'Barb Dwyer', date:'15/11/2020', total: 4577, warehouse:'Washington DC', status:'Delivered', statusbg: 'bg-success' },
    { id: '#W83549803', invoice:'3', name:'Wilma Mumduya', date:'17/11/2020', total: 4500, warehouse:'San Francisco', status:'Delivered', statusbg: 'bg-success' },
    { id: '#W83549804', invoice:'4', name:'Zack Lee', date:'18/11/2020', total: 3266, warehouse:'Las Vegas', status:'Refunded', statusbg: 'bg-info' },
    { id: '#W83549805', invoice:'5', name:'Tom Foolery', date:'20/11/2020', total: 130000, warehouse:'Los Angeles', status:'Cancelled', statusbg: 'bg-danger' },
    { id: '#W83549806', invoice:'6', name:'Pat Agonia', date:'22/11/2020', total: 253, warehouse:'Chicago', status:'Delivered', statusbg: 'bg-success' },
    { id: '#W83549807', invoice:'6', name:'Mary Christmas', date:'26/11/2020', total: 1526, warehouse:'Los Angeles', status:'Cancelled', statusbg: 'bg-danger' },
    { id: '#W83549808', invoice:'5', name:'Ella Vator', date:'29/11/2020', total: 1500, warehouse:'Chicago', status:'Pending', statusbg: 'bg-warning' },
    { id: '#W83549809', invoice:'8', name:'Sharon Needles', date:'01/12/2020', total: 230000, warehouse:'UK', status:'Delivered', statusbg: 'bg-success' },
    { id: '#W83549810', invoice:'7', name:'Anne Fibbiyon', date:'04/12/2020', total: 33990, warehouse:'Chicago', status:'Refunded', statusbg: 'bg-info' },
    { id: '#W83549811', invoice:'9', name:'Frank Senbeans', date:'09/12/2020', total: 12999, warehouse:'Chicago', status:'Cancelled', statusbg: 'bg-danger' },
    { id: '#W83549812', invoice:'12', name:'Chris P. Bacon', date:'12/12/2020', total: 15993, warehouse:'Brazil', status:'Delivered', statusbg: 'bg-success' },
  ]

}
