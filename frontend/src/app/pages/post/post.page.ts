import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
    private dataService: DataService,
  ) {
    this.postSlug = this.route.snapshot.paramMap.get('postSlug');
  }

  ngOnInit() {
    // load the post
    if (!!this.postSlug) {
      this.dataService.post({ slug: this.postSlug })
      .subscribe(post => {
        this.post = post;
        this.loadRelatedPosts();
      });
    }
  }

  loadRelatedPosts() {
    this.dataService.posts().subscribe(posts => {
      const [ category ] = Object.keys(this.post.categories || {});
      const [ tag ] = Object.keys(this.post.tags || {});

      // get posts
      const myPosts = [];
      for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        if (
          (!!category && !!post.categories && !!post.categories[category]) ||
          (!!tag && !!post.tags && !!post.tags[tag])
        ) {
          myPosts.push(post);
        }
      }

      // set posts
      this.posts = myPosts;
    });
  }

}
