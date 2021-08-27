import {  Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  @ViewChild('bagCount' , {static: true}) bagCount: ElementRef;
  @ViewChild('slippers' , {static: true}) slippers: ElementRef;
  @ViewChild('phone' , {static: true}) phone: ElementRef;
  @ViewChild('flowers' , {static: true}) flowers: ElementRef;
  @ViewChild('chairs' , {static: true}) chairs: ElementRef;
  @ViewChild('watches' , {static: true}) watches: ElementRef;

  constructor(private elf : ElementRef) { }

  ngOnInit(): void {
    
    
  }

  bagCountInc(){
     this.bagCount.nativeElement.value++ 
  }
  bagCountdec(){
    if( this.bagCount.nativeElement.value  > 0){
      this.bagCount.nativeElement.value-- 
    }
  }
  
  slippersInc(){
     this.slippers.nativeElement.value++ 
  }
  slippersdec(){
    if( this.slippers.nativeElement.value > 0){
      this.slippers.nativeElement.value-- 
    }
  }
  
  phoneInc(){
     this.phone.nativeElement.value++ 
  }
  phonedec(){
     if(this.phone.nativeElement.value > 0){
      this.phone.nativeElement.value-- 
     }
  }
  
  flowersInc(){
     this.flowers.nativeElement.value++ 
  }
  flowersdec(){
     if(this.flowers.nativeElement.value > 0){
      this.flowers.nativeElement.value-- 
     }
  }
  
  chairsInc(){
     this.chairs.nativeElement.value++ 
  }
  chairsdec(){
     if(this.chairs.nativeElement.value > 0){
      this.chairs.nativeElement.value-- 
     }
  }
  
  watchesInc(){
     this.watches.nativeElement.value++ 
  }
  watchesdec(){
     if(this.watches.nativeElement.value > 0){
      this.watches.nativeElement.value-- 
     }
  }
  
}
