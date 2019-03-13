import { Injectable, Inject } from '@angular/core';
import { Router, Event, RouteConfigLoadStart, RouteConfigLoadEnd, NavigationEnd } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { IonContent } from '@ionic/angular';

export interface CustomMetas {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  author?: string;
  twitterCard?: string;
  twitterCreator?: string;
  ogType?: string;
  ogLocale?: string;
}

export interface Metas extends CustomMetas {
  twitterSite?: string;
  ogSiteName?: string;
  ogAdmins?: string;
  ogAppId?: string;
}

@Injectable({
  providedIn: 'root'
})
export class NavService {

  private router: Router;
  // data
  private data: {[key: string]: any} = {};
  // helpers
  private loading = false;
  private previousUrls: string[] = [];
  // meta
  private defaultMetas: Metas = {};
  private routeMetas: {[url: string]: Metas} = {};

  constructor(
    @Inject(DOCUMENT) private dom,
    private title: Title,
    private meta: Meta,
  ) {}

  init(
    router: Router,
    defaultMetas?: Metas,
    hooks: {[event: string]: (event: Event) => void} = {},
  ) {
    // set router
    this.router = router;
    // set default metas
    this.defaultMetas = defaultMetas;
    // events
    this.router.events.subscribe(async event => {
      let name = ''; // event name
      if (event instanceof RouteConfigLoadStart) {
        name = 'RouteConfigLoadStart';
        this.loading = true;
      } else if (event instanceof RouteConfigLoadEnd) {
        name = 'RouteConfigLoadEnd';
        setTimeout(() => { this.loading = false; }, 1000);
      } else if (event instanceof NavigationEnd) {
        name = 'NavigationEnd';
        // record urls for backing navigation
        const url = event.urlAfterRedirects;
        const backUrl = this.previousUrls[this.previousUrls.length - 2];
        if (!backUrl || (!!backUrl && url !== backUrl)) {
          this.previousUrls.push(url);
        } else {
          this.previousUrls.pop();
        }
        // set title & meta
        this.setMeta(this.routeMetas[this.router.url] || {});
      }
      // run hook
      const hook = hooks[name] || ((e: Event) => e);
      hook(event);
    });
  }

  /**
   * data
   */
  get(key?: string) {
    return !!key ? this.data[key] : this.data;
  }

  /**
   * helpers
   */
  isLoading() {
    return this.loading;
  }

  canGoBack() {
    return this.previousUrls.length > 1;
  }

  /**
   * navigation
   */
  back() {
    const path = this.previousUrls[this.previousUrls.length - 2];
    return this.navigate([ path || '/' ]);
  }

  navigate(route: string[], data: {[key: string]: any} = {}) {
    this.data = data;
    return this.router.navigate(route);
  }

  scrollToTop(ionicContent: IonContent, duration = 1000) {
    ionicContent.scrollToTop(duration);
  }

  scrollTo(ionicContent: IonContent, elem: any, duration = 1000) {
    const y: number = elem.offsetTop || 0;
    ionicContent.scrollToPoint(0, y, duration);
  }

  /**
   * meta
   */

  setMeta(data: any = {}, rewriteFields: any = {}) {
    // extract & process meta data
    const customMetas = this.extractMetaData(data, rewriteFields);
    const metas = this.processMetaData(customMetas);
    // save meta data
    if (!this.routeMetas[this.router.url]) {
      this.routeMetas[this.router.url] = customMetas;
    }
    // set title and meta tags
    this.setTitle(metas.title);
    this.setTags(metas);
  }

  private setTitle(newTitle: string) {
    return this.title.setTitle(newTitle);
  }

  private setTags(data: Metas) {
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
    // remove some tags
    // NOTE: because updateTag() create more tags
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

  private setLinks(items: Array<{ rel: string, href: string }>) {
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

  private extractMetaData(data: any, rewriteFields: any = {}): CustomMetas {
    const title = data[rewriteFields['title'] || 'title'];
    const description = data[rewriteFields['description'] || 'description'];
    const image = data[rewriteFields['image'] || 'image'];
    let url: string = data[rewriteFields['url'] || 'url'] || this.dom.URL;
    url = url.substr(-1) === '/' ? url : (url + '/');
    const author = data[rewriteFields['author'] || 'author'];
    const twitterCard = data[rewriteFields['twitterCard'] || 'twitterCard'];
    const twitterCreator = data[rewriteFields['twitterCreator'] || 'twitterCreator'];
    const ogType = data[rewriteFields['ogType'] || 'ogType'];
    const ogLocale = data[rewriteFields['ogLocale'] || 'ogLocale'];
    return { title, description, image, url, author, twitterCard, twitterCreator, ogType, ogLocale };
  }

  private processMetaData(customMetas: CustomMetas): Metas {
    // custom
    const title = customMetas['title'] || this.defaultMetas['title'];
    const description = customMetas['description'] || this.defaultMetas['description'];
    const image = customMetas['image'] || this.defaultMetas['image'];
    const url = customMetas['url'];
    const author = customMetas['author'] || this.defaultMetas['author'];
    const twitterCard = customMetas['twitterCard'] || this.defaultMetas['twitterCard'];
    const twitterCreator = customMetas['twitterCreator'] || this.defaultMetas['twitterCreator'];
    const ogType = customMetas['ogType'] || this.defaultMetas['ogType'];
    const ogLocale = customMetas['ogLocale'] || this.defaultMetas['ogLocale'];
    // default
    const twitterSite = this.defaultMetas['twitterSite'];
    const ogSiteName = this.defaultMetas['ogSiteName'];
    const ogAdmins = this.defaultMetas['ogAdmins'];
    const ogAppId = this.defaultMetas['ogAppId'];
    return {
      title, description, image, url, author,
      twitterCard, twitterSite, twitterCreator,
      ogType, ogSiteName, ogLocale, ogAdmins, ogAppId,
    };
  }
}
