import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundPipe'
})
export class RoundPipePipe implements PipeTransform {
    transform (input:number) {
      return Math.floor(input/10) * 10; //10원단위 절사 파이프
    }
}