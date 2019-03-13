import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NavService } from '../../services/nav/nav.service';
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
    private nav: NavService,
    private dataService: DataService,
  ) {
    this.authorSlug = this.route.snapshot.paramMap.get('authorSlug');
  }

  ngOnInit() {
    // load the author
    if (!!this.authorSlug) {
      this.dataService.author(this.authorSlug)
      .subscribe(author => {
        this.author = author;
        // set meta
        this.nav.setMeta(author, {
          title: 'name',
          description: 'bio',
          image: 'avatar',
        });
      });
    }

    // load posts
    this.dataService
    .posts(post => (!!post.author && !!post.author[this.authorSlug]))
    .subscribe(posts => {
      this.posts = posts;
    });
  }

}
