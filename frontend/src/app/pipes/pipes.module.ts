import { NgModule } from '@angular/core';

import { O2aPipe } from './o2a/o2a';
import { AgoPipe } from './ago/ago';
import { SafePipe } from './safe/safe';
import { FilterPipe } from './filter/filter';




@NgModule({
  declarations: [
    O2aPipe,
    AgoPipe,
    SafePipe,
    FilterPipe
  ],
  imports: [],
  exports: [
    O2aPipe,
    AgoPipe,
    SafePipe,
    FilterPipe
  ]
})
export class PipesModule {}
