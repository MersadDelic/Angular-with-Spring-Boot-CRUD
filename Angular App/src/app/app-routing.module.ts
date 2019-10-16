import { NgModule } from '@angular/core';
import { DashboardComponent }   from './dashboard/dashboard.component';
import {RouterModule, Routes} from "@angular/router";
import {PostComponent} from "./post/post.component";
import {MainService} from "./main.service";
import {PostModalComponent} from "./post-modal/post-modal.component";

const routes: Routes = [
  {path: '', component: DashboardComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'post', component: PostComponent},
  { path: 'post-modal', component: PostModalComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ],


})
export class AppRoutingModule { }
