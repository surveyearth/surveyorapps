import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MetaService } from '../../services/meta/meta.service';
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
    private metaService: MetaService,
    private dataService: DataService,
  ) {
    this.tagSlug = this.route.snapshot.paramMap.get('tagSlug');
  }

  ngOnInit() {
    // load the tag
    if (!!this.tagSlug) {
      this.dataService.tag({ slug: this.tagSlug })
      .subscribe(tag => {
        this.tag = tag;
        // set meta
        this.metaService.setMeta(tag);
      });
    }

    // load posts
    this.dataService.posts().subscribe(posts => {
      const myPosts = [];
      for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        if (!!post.tags && !!post.tags[this.tagSlug]) {
          myPosts.push(post);
        }
      }
      this.posts = myPosts;
    });
  }

}
