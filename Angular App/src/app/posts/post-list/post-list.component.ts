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
  postList: Post[];

  constructor(private mainService: PostService, private router: Router) {
  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.mainService.getPosts().subscribe(
      accResp => {
        this.postList = accResp;
      },
      error1 => console.log(error1)
    );
  }

}
