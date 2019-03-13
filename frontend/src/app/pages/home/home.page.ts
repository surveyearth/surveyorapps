import { Component, OnInit } from '@angular/core';

import { NavService } from '../../services/nav/nav.service';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  posts: any[];
  s: string;

  constructor(
    private nav: NavService,
    private dataService: DataService,
  ) {

  }

  ngOnInit() {
    // load posts
    this.dataService.posts().subscribe(posts => {
      this.posts = posts;
    });
    // set meta
    this.nav.setMeta();
  }

}
