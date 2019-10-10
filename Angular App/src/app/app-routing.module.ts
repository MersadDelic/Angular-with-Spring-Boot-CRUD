import { NgModule } from '@angular/core';
import { DashboardComponent }   from './dashboard/dashboard.component';
import {RouterModule, Routes} from "@angular/router";
import {PostComponent} from "./post/post.component";
import {MainService} from "./main.service";

const routes: Routes = [

  { path: 'dashboard', component: DashboardComponent },
  { path: 'post', component: PostComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ],


})
export class AppRoutingModule { }