import {Component, Injectable, OnInit} from '@angular/core';
import {PostService} from "../post.service";
import {Router} from "@angular/router";
import {Post} from "../post";


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class PostListComponent implements OnInit {
  postList: Post[] = [];
  showModal: any;


  constructor(private postService: PostService, private router: Router) {
  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postService.getPosts().subscribe(
      accResp => {
        this.postList = accResp;
      },
      error1 => console.log(error1)
    );
  }

  postdetails(id: number){
    this.router.navigate(['details', id]);
  }

  /*this.postSub = this.postService.getPostUpdateListener()
    .subscribe(
      (posts: Post[]) => {
        this.postList = posts;
      }
    );*/

}
