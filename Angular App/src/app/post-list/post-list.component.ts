import { Component, OnInit } from '@angular/core';
import {MainService} from "../main.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
 postList: any;

  constructor(private mainService: MainService, private router: Router) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(){
    this.mainService.getPost().subscribe(
      accResp => {
        this.postList = accResp;

      },
      error1 => console.log(error1)
    );
  }

}
