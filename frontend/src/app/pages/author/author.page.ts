import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MetaService } from '../../services/meta/meta.service';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.page.html',
  styleUrls: ['./author.page.scss'],
})
export class AuthorPage implements OnInit {

  authorSlug: string;
  author: any;
  posts: any[];

  constructor(
    private route: ActivatedRoute,
    private metaService: MetaService,
    private dataService: DataService,
  ) {
    this.authorSlug = this.route.snapshot.paramMap.get('authorSlug');
  }

  ngOnInit() {
    // load the author
    if (!!this.authorSlug) {
      this.dataService.author({ slug: this.authorSlug })
      .subscribe(author => {
        this.author = author;
        // set meta
        this.metaService.setMeta(author, {
          title: 'name',
          description: 'bio',
          image: 'avatar',
        });
      });
    }

    // load posts
    this.dataService.posts().subscribe(posts => {
      const myPosts = [];
      for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        if (!!post.author && !!post.author[this.authorSlug]) {
          myPosts.push(post);
        }
      }
      this.posts = myPosts;
    });
  }

}
