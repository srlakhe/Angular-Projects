import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, propName: string): any {
    return value.sort(
      (a, b) => {
        return (a[propName] > b[propName]) ? 1 : ((b[propName] > a[propName]) ? -1 : 0 );
    });
  }

}
