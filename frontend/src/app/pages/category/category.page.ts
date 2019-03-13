import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NavService } from '../../services/nav/nav.service';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  categorySlug: string;
  category: any;
  posts: any[];

  constructor(
    private route: ActivatedRoute,
    private nav: NavService,
    private dataService: DataService,
  ) {
    this.categorySlug = this.route.snapshot.paramMap.get('categorySlug');
  }

  ngOnInit() {
    // load the category
    if (!!this.categorySlug) {
      this.dataService.category(this.categorySlug)
      .subscribe(category => {
        this.category = category;
        // set meta
        this.nav.setMeta(category);
      });
    }

    // load posts
    this.dataService
    .posts(post => (!!post.categories && !!post.categories[this.categorySlug]))
    .subscribe(posts => {
      this.posts = posts;
    });
  }

}
