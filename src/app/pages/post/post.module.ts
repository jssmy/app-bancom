import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPostComponent } from './list-post/list-post.component';
import { AddPostComponent } from './add-post/add-post.component';
import { POST_ROUTES } from './post.routes';



@NgModule({
  declarations: [
    ListPostComponent,
    AddPostComponent
  ],
  imports: [
    CommonModule,
    POST_ROUTES
  ]
})
export class PostModule { }
