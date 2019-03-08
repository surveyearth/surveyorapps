import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MetaService } from '../../services/meta/meta.service';
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
    private metaService: MetaService,
    private dataService: DataService,
  ) {
    this.categorySlug = this.route.snapshot.paramMap.get('categorySlug');
  }

  ngOnInit() {
    // load the category
    if (!!this.categorySlug) {
      this.dataService.category({ slug: this.categorySlug })
      .subscribe(category => {
        this.category = category;
        // set meta
        this.metaService.setMeta(category);
      });
    }

    // load posts
    this.dataService.posts().subscribe(posts => {
      const myPosts = [];
      for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        if (!!post.categories && !!post.categories[this.categorySlug]) {
          myPosts.push(post);
        }
      }
      this.posts = myPosts;
    });
  }

}
