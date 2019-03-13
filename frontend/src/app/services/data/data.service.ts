import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Filter } from '@sheetbase/client';

import { Author, Category, Tag, Page, Post } from '../../types';
import { AppService } from '../app/app.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private App: AppService;

  constructor() { }

  init(App: AppService) {
    this.App = App;
  }

  private all<Item>(sheet: string, filter?: Filter): Observable<Item[]> {
    return from(!!filter ? this.App.database().query(sheet, filter) : this.App.database().all(sheet));
  }

  private item<Item>(sheet: string, finder: string | Filter): Observable<Item> {
    return from(this.App.database().item(sheet, finder));
  }

  authors(filter?: Filter) {
    return this.all<Author>('authors', filter);
  }
  author(finder: string | Filter) {
    return this.item<Author>('authors', finder);
  }

  categories(filter?: Filter) {
    return this.all<Category>('categories', filter);
  }
  category(finder: string | Filter) {
    return this.item<Category>('categories', finder);
  }

  tags(filter?: Filter) {
    return this.all<Tag>('tags', filter);
  }
  tag(finder: string | Filter) {
    return this.item<Tag>('tags', finder);
  }

  pages(filter?: Filter) {
    return this.all<Page>('pages', filter);
  }
  page(finder: string | Filter) {
    return this.item<Page>('pages', finder);
  }

  posts(filter?: Filter) {
    return this.all<Post>('posts', filter);
  }
  post(finder: string | Filter) {
    return this.item<Post>('posts', finder);
  }

}
