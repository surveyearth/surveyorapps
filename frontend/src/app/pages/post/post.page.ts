import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NavService } from '../../services/nav/nav.service';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

  postSlug: string;
  post: any;
  posts: any[]; // related posts

  constructor(
    private route: ActivatedRoute,
    private nav: NavService,
    private dataService: DataService,
  ) {
    this.postSlug = this.route.snapshot.paramMap.get('postSlug');
  }

  ngOnInit() {
    // load the post
    if (!!this.postSlug) {
      this.dataService.post(this.postSlug)
      .subscribe(post => {
        this.post = post;
        // set meta
        this.nav.setMeta(post, { author: '_' });
        this.loadRelatedPosts();
      });
    }
  }

  loadRelatedPosts() {
    this.dataService.posts(post => {
      const [ category ] = Object.keys(this.post.categories || {});
      const [ tag ] = Object.keys(this.post.tags || {});
      return (
        (!!category && !!post.categories && !!post.categories[category]) ||
        (!!tag && !!post.tags && !!post.tags[tag])
      );
    })
    .subscribe(posts => {
      this.posts = posts;
    });
  }

}
