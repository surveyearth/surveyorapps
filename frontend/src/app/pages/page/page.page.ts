import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NavService } from '../../services/nav/nav.service';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.page.html',
  styleUrls: ['./page.page.scss'],
})
export class PagePage implements OnInit {

  pageSlug: string;
  page: any;

  constructor(
    private route: ActivatedRoute,
    private nav: NavService,
    private dataService: DataService,
  ) {
    this.pageSlug = this.route.snapshot.paramMap.get('pageSlug');
  }

  ngOnInit() {
    // load the page
    if (!!this.pageSlug) {
      this.dataService.page(this.pageSlug)
      .subscribe(page => {
        this.page = page;
        // set meta
        this.nav.setMeta(page, { image: 'cover' });
      });
    }
  }

}
