import { Component, OnInit } from '@angular/core';
import { DefaultTableData } from 'src/app/shared/data/tables/basic';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {
  
  public defaultData = DefaultTableData;

  constructor() { }

  ngOnInit(): void {
  }

  

}
