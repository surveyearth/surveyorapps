import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/home/home.module#HomePageModule', pathMatch: 'full' },
  { path: 'author/:authorSlug', loadChildren: './pages/author/author.module#AuthorPageModule' },
  { path: 'category/:categorySlug', loadChildren: './pages/category/category.module#CategoryPageModule' },
  { path: 'tag/:tagSlug', loadChildren: './pages/tag/tag.module#TagPageModule' },
  { path: 'page/:pageSlug', loadChildren: './pages/page/page.module#PagePageModule' },
  { path: 'post/:postSlug', loadChildren: './pages/post/post.module#PostPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
