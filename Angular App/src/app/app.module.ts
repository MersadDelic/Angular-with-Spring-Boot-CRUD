import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AppRoutingModule} from './app-routing.module';
import {PostService} from './posts/post.service';
import {PostListComponent} from './posts/post-list/post-list.component';
import {CommentsComponent} from './comments/comments.component';
import { PostDetailsComponent } from './posts/post-details/post-details.component';
import { UpdatePostComponent } from './posts/update-post/update-post.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PostListComponent,
    CommentsComponent,
    PostDetailsComponent,
    UpdatePostComponent


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,

  ],
  providers: [PostService, PostListComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
