import { Component, OnInit } from '@angular/core';
import { Post } from "../post";
import { Router, ActivatedRoute } from '@angular/router';
import {PostService} from "../post.service";
@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  id: number;
  post: Post;

  constructor(private route: ActivatedRoute, private postservice: PostService, private router: Router) { }

  ngOnInit() {
    this.post = new Post();

    this.id = this.route.snapshot.params['id'];

    this.postservice.getPost(this.id)
      .subscribe(data => {
        console.log(data)
        this.post = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['post']);
  }
}
