import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { initializeApp } from '@sheetbase/client/app';
import '@sheetbase/client/database';

import { AppService } from './services/app/app.service';
import { NavService } from './services/nav/nav.service';
import { DataService } from './services/data/data.service';

import { SHEETBASE_CONFIG } from '../sheetbase.config';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private appService: AppService,
    private navService: NavService,
    private dataService: DataService,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    // init app
    this.appService.init(initializeApp({ ... SHEETBASE_CONFIG, cacheTime: 60 }));

    // setup nav service
    this.navService.init(this.router, {
      title: 'Sheetbase Simpleblog',
      description: 'The Simpleblog theme, based on Angular + Ionic.',
      image: 'https://sheetbase-themes.github.io/simpleblog-angular/assets/images/featured.jpg',
      author: 'https://www.facebook.com/sheetbase',
      twitterCard: 'summary_large_image',
      twitterSite: '@sheetbase_net',
      twitterCreator: '@sheetbase_net',
      ogType: 'website',
      ogSiteName: 'Sheetbase Simpleblog Theme',
      ogLocale: 'en_US',
      ogAdmins: '1552168898245647',
      ogAppId: '276545556215548',
    });

    // setup data service
    this.dataService.init(this.appService);
  }

}
