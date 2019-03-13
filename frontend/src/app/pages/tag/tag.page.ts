import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NavService } from '../../services/nav/nav.service';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.page.html',
  styleUrls: ['./tag.page.scss'],
})
export class TagPage implements OnInit {

  tagSlug: string;
  tag: any;
  posts: any[];

  constructor(
    private route: ActivatedRoute,
    private nav: NavService,
    private dataService: DataService,
  ) {
    this.tagSlug = this.route.snapshot.paramMap.get('tagSlug');
  }

  ngOnInit() {
    // load the tag
    if (!!this.tagSlug) {
      this.dataService.tag(this.tagSlug)
      .subscribe(tag => {
        this.tag = tag;
        // set meta
        this.nav.setMeta(tag);
      });
    }

    // load posts
    this.dataService
    .posts(post => (!!post.tags && !!post.tags[this.tagSlug]))
    .subscribe(posts => {
      this.posts = posts;
    });
  }

}
