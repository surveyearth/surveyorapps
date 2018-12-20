import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PipesModule } from '../pipes/pipes.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        SidebarComponent,
        PostsComponent,
        PostComponent,
    ],
    imports: [
        CommonModule,
        IonicModule,
        RouterModule,
        PipesModule,
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        SidebarComponent,
        PostsComponent,
        PostComponent,
    ]
})
export class ComponentsModule {}
