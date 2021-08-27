import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchDate'
})
export class SearchDatePipe implements PipeTransform {

  transform(value: number): any {
    let result = [];
    for(let i = 1; i <= 31; i++){
      result.push(i);
    }
    return result;
  }

}
