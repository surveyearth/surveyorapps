import { Pipe, PipeTransform } from '@angular/core';

import { search } from '../../utils';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], keyword: string, fields?: string[]) {
    return search(items, keyword, fields);
  }

}
