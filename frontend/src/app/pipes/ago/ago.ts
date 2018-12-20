import { Pipe, PipeTransform } from '@angular/core';

import { relativeTime } from '../../utils';

@Pipe({
  name: 'ago'
})
export class AgoPipe implements PipeTransform {

  transform(value: any) {
    return relativeTime(value);
  }

}
