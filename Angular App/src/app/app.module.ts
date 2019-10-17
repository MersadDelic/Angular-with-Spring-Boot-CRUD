import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {DashboardComponent} from './dashboard/dashboard.component';
import {AppRoutingModule} from './app-routing.module';
import {CreatePostComponent} from './posts/create-post/create-post.component';
import {PostService} from "./posts/post.service";
import {HttpClientModule} from "@angular/common/http";
import {PostListComponent} from './posts/post-list/post-list.component';
import {CommentsComponent} from './comments/comments.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CreatePostComponent,
    PostListComponent,
    CommentsComponent


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PostService, PostListComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
