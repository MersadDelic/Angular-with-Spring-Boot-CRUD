import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RouterModule, Routes} from "@angular/router";
import {CreatePostComponent} from "./posts/create-post/create-post.component";
import {PostListComponent} from "./posts/post-list/post-list.component";
import {UpdatePostComponent} from "./posts/update-post/update-post.component";
import {PostDetailsComponent} from "./posts/post-details/post-details.component";


const routes: Routes = [
 {path: '', component: DashboardComponent},

  {path: 'post', component: CreatePostComponent},
  { path: 'update/:id', component: UpdatePostComponent },
  { path: 'details/:id', component: PostDetailsComponent },

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ],


})
export class AppRoutingModule { }
