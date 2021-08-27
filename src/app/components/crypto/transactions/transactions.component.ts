import { AfterViewInit, Component, OnInit } from '@angular/core';
import {DataTable} from "simple-datatables"
import { transactionData } from 'src/app/shared/data/crypto-currency/transaction';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit, AfterViewInit {

  public transaction = transactionData;

  constructor() { }

  ngOnInit(): void {
    
  }
  ngAfterViewInit(){
    let dataTable = new DataTable("#dataTable", {
      searchable: true,
      fixedHeight: true,
    })
  }




}
