import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { MetaService } from './services/meta/meta.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private metaService: MetaService,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    // init meta service
    this.metaService.init({
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
  }

}
