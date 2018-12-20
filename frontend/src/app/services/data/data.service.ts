import { Injectable } from '@angular/core';
import { initializeApp, App } from '@sheetbase/client';
import { from } from 'rxjs';

import { SHEETBASE_CONFIG } from '../../../sheetbase.config';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private app: App;

  constructor() {
    this.app = initializeApp(SHEETBASE_CONFIG);
  }

  authors() {
    return from(this.app.database().all('authors'));
  }
  author(idOrCondition: number | {[key: string]: string}) {
    return from(this.app.database().item('authors', idOrCondition));
  }

  categories() {
    return from(this.app.database().all('categories'));
  }
  category(idOrCondition: number | {[key: string]: string}) {
    return from(this.app.database().item('categories', idOrCondition));
  }

  tags() {
    return from(this.app.database().all('tags'));
  }
  tag(idOrCondition: number | {[key: string]: string}) {
    return from(this.app.database().item('tags', idOrCondition));
  }

  pages() {
    return from(this.app.database().all('pages'));
  }
  page(idOrCondition: number | {[key: string]: string}) {
    return from(this.app.database().item('pages', idOrCondition));
  }

  posts() {
    return from(this.app.database().all('posts'));
  }
  post(idOrCondition: number | {[key: string]: string}) {
    return from(this.app.database().item('posts', idOrCondition));
  }

}
