import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
    private dataService: DataService,
  ) {
    this.pageSlug = this.route.snapshot.paramMap.get('pageSlug');
  }

  ngOnInit() {
    // load the page
    if (!!this.pageSlug) {
      this.dataService.page({ slug: this.pageSlug })
      .subscribe(page => {
        this.page = page;
      });
    }
  }

}
