import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { Router, ActivatedRoute } from '@angular/router';
import {PostService} from '../post.service';
@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {


  post: Post;

  constructor(private route: ActivatedRoute,
              private postservice: PostService,
              private router: Router) { }


  ngOnInit() {
    this.getmyPost();
  }

  getmyPost() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.postservice.getPost(id)
      .subscribe(
        post => { this.post = post;
        },
        error => console.log(error)
      );
  }



  list() {
    this.router.navigate(['postlist']);
  }
}

