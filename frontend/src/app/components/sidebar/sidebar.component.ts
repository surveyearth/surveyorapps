import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  categories: any[];
  tags: any[];

  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit() {
    // load categories
    this.dataService.categories().subscribe(categories => {
      this.categories = categories;
    });
    // load tags
    this.dataService.tags().subscribe(tags => {
      this.tags = tags;
    });
  }

}
