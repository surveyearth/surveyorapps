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
    return from(this.app.database().all('authors', 60));
  }
  author(idOrCondition: number | {[key: string]: string}) {
    return from(this.app.database().item('authors', idOrCondition, 60));
  }

  categories() {
    return from(this.app.database().all('categories', 60));
  }
  category(idOrCondition: number | {[key: string]: string}) {
    return from(this.app.database().item('categories', idOrCondition, 60));
  }

  tags() {
    return from(this.app.database().all('tags', 60));
  }
  tag(idOrCondition: number | {[key: string]: string}) {
    return from(this.app.database().item('tags', idOrCondition, 60));
  }

  pages() {
    return from(this.app.database().all('pages', 60));
  }
  page(idOrCondition: number | {[key: string]: string}) {
    return from(this.app.database().item('pages', idOrCondition, 60));
  }

  posts() {
    return from(this.app.database().all('posts', 60));
  }
  post(idOrCondition: number | {[key: string]: string}) {
    return from(this.app.database().item('posts', idOrCondition, 60));
  }

}
