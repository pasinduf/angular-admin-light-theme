import { Component, OnInit } from '@angular/core';
import {dragula} from 'ng2-dragula';

@Component({
  selector: 'app-draggable-cards',
  templateUrl: './draggable-cards.component.html',
  styleUrls: ['./draggable-cards.component.scss']
})
export class DraggableCardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    dragula(
      [
        document.querySelector('#left-defaults'), 
        document.querySelector('#right-defaults'),
        document.querySelector('#left-events'),
      ]);
  }

}
