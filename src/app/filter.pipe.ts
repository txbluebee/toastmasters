import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.model';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(input: Member[], filterOption) {
    if(input) {
      var output: Member[] = [];
      if (filterOption === "all") {
        for (var i = 0; i < input.length; i++) {
          output.push(input[i]);
        }
        return output;
      } else {
        for (var i = 0; i < input.length; i++) {
          if (input[i].role === filterOption || input[i].city === filterOption) {
            output.push(input[i]);
          }
        }
        return output;
      }
    }
  }
}
