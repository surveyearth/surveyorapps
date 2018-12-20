import { Pipe, PipeTransform } from '@angular/core';

import { o2a } from '../../utils';

@Pipe({
  name: 'o2a'
})
export class O2aPipe implements PipeTransform {

  transform(value: {[$key: string]: any}, clone = true, limit?: number) {
    return o2a(value, clone, limit);
  }

}
