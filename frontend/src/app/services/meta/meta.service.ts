import { Injectable, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

export interface Metas {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  author?: string;
  twitterCard?: string;
  twitterSite?: string;
  twitterCreator?: string;
  ogType?: string;
  ogSiteName?: string;
  ogLocale?: string;
  ogAdmins?: string;
  ogAppId?: string;
}

@Injectable({
  providedIn: 'root'
})
export class MetaService {

  private defaultValues: Metas = {};

  constructor(
    @Inject(DOCUMENT) private dom,
    private title: Title,
    private meta: Meta,
  ) {}

  init(defaultValues: Metas) {
    this.defaultValues = defaultValues;
  }

  setMeta(data: any = {}, rewriteFields: any = {}) {
    data = this.processData(data, rewriteFields);
    this.setTitle(data.title);
    this.setTags(data);
  }

  setTitle(newTitle: string) {
    return this.title.setTitle(newTitle);
  }

  setTags(data: Metas) {
    const {
      title, description, image, url, author,
      twitterCard, twitterSite, twitterCreator,
      ogType, ogSiteName, ogLocale, ogAdmins, ogAppId,
    } = data;
    // links
    this.setLinks([
      { rel: 'author', href: author },
      { rel: 'canonical', href: url }
    ]);
    // remove
    this.meta.removeTag('itemprop="name"');
    this.meta.removeTag('itemprop="description"');
    this.meta.removeTag('itemprop="image"');
    // update meta
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ itemprop: 'name', content: title });
    this.meta.updateTag({ itemprop: 'description', content: description });
    this.meta.updateTag({ itemprop: 'image', content: image });
    this.meta.updateTag({ name: 'twitter:card', content: twitterCard });
    this.meta.updateTag({ name: 'twitter:site', content: twitterSite });
    this.meta.updateTag({ name: 'twitter:creator', content: twitterCreator });
    this.meta.updateTag({ property: 'og:type', content: ogType });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ property: 'og:site_name', content: ogSiteName });
    this.meta.updateTag({ property: 'og:locale', content: ogLocale });
    this.meta.updateTag({ property: 'og:admins', content: ogAdmins });
    this.meta.updateTag({ property: 'og:app_id', content: ogAppId });
  }

  setLinks(items: Array<{ rel: string, href: string }>) {
    for (let i = 0; i < items.length; i++) {
      const { rel, href } = items[i];
      let elem = this.dom.querySelector(`link[rel=${rel}]`);
      if (!elem) {
        // create
        elem = this.dom.createElement('link');
        elem.setAttribute('rel', rel);
        this.dom.head.appendChild(elem);
        elem.setAttribute('href', href);
      } else {
        // update
        elem.setAttribute('href', href);
      }
    }
  }

  private processData(data: Metas, rewriteFields: any = {}): Metas {
    const title = data[rewriteFields['title'] || 'title'] || this.defaultValues['title'];
    const description = data[rewriteFields['description'] || 'description'] || this.defaultValues['description'];
    const image = data[rewriteFields['image'] || 'image'] || this.defaultValues['image'];
    let url: string = data[rewriteFields['url'] || 'url'] || this.dom.URL;
    url = url.substr(-1) === '/' ? url : (url + '/');
    const author = this.defaultValues['author'] || 'https://www.facebook.com/sheetbase';
    const twitterCard = data[rewriteFields['twitterCard'] || 'twitterCard'] || this.defaultValues['twitterCard'];
    const twitterSite = data[rewriteFields['twitterSite'] || 'twitterSite'] || this.defaultValues['twitterSite'];
    const twitterCreator = data[rewriteFields['twitterCreator'] || 'twitterCreator'] || this.defaultValues['twitterCreator'];
    const ogType = data[rewriteFields['ogType'] || 'ogType'] || this.defaultValues['ogType'];
    const ogSiteName = data[rewriteFields['ogSiteName'] || 'ogSiteName'] || this.defaultValues['ogSiteName'];
    const ogLocale = data[rewriteFields['ogLocale'] || 'ogLocale'] || this.defaultValues['ogLocale'];
    const ogAdmins = data[rewriteFields['ogAdmins'] || 'ogAdmins'] || this.defaultValues['ogAdmins'];
    const ogAppId = data[rewriteFields['ogAppId'] || 'ogAppId'] || this.defaultValues['ogAppId'];
    return {
      title, description, image, url, author,
      twitterCard, twitterSite, twitterCreator,
      ogType, ogSiteName, ogLocale, ogAdmins, ogAppId,
    };
  }

}
