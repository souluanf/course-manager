import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
  name: 'replace'
})
export class ReplacePipe implements PipeTransform {
  transform(value: string, char: string, valueToReplace: string): any {
    return value.replace(char, valueToReplace);
  }
}
