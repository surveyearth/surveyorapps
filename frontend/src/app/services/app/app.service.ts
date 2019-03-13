import { Injectable } from '@angular/core';
import { App } from '@sheetbase/client';

import { AppOptions } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  app: App;
  options: AppOptions;

  constructor() { }

  init(app: App, options?: AppOptions): AppService {
    this.app = app; // set app
    this.options = options; // load options
    return this;
  }

  api() {
    return this.app.Api.setEndpoint('app');
  }

  database() {
    return this.app.Database;
  }

}
