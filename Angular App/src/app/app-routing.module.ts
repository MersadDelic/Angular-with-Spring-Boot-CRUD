import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RouterModule, Routes} from "@angular/router";
import {CreatePostComponent} from "./posts/create-post/create-post.component";


const routes: Routes = [
  {path: '', component: DashboardComponent},
  { path: 'dashboard', component: DashboardComponent },
  {path: 'post', component: CreatePostComponent},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ],


})
export class AppRoutingModule { }
