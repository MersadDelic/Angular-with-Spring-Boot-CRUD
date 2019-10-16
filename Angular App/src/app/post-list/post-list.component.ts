import {Component, OnInit} from '@angular/core';
import {MainService} from "../main.service";
import {Router} from "@angular/router";
import {Post} from "../post";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  postList: Post[];

  constructor(private mainService: MainService, private router: Router) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(){
    this.mainService.getPosts().subscribe(
      accResp => {
        this.postList = accResp;
      },
      error1 => console.log(error1)
    );
  }

}
