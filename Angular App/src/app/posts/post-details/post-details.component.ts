import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { Router, ActivatedRoute } from '@angular/router';
import {PostService} from '../post.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  showModal: any;
  post: Post;
  postForm: FormGroup;
  postList: Post[] = [];

  constructor(private router: Router, private postService: PostService, private route: ActivatedRoute) {
    this.postForm = new FormGroup({
      'title': new FormControl(null, [Validators.required]),
      'description': new FormControl(null, [Validators.required]),
      'content': new FormControl(null, [Validators.required])

    });
  }

  ngOnInit() {
    this.getmyPost();
  }

  getmyPost() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.postService.getPost(id)
      .subscribe(
        post => { this.post = post;
        },
        error => console.log(error)
      );
  }

  savePost() {
    const post = new Post();
    post.title = this.postForm.value.title;
    post.description = this.postForm.value.description;
    post.content = this.postForm.value.content;

    console.log('create-post created:' + post);

    this.postService.savePost(post).subscribe(
      // this.postListComponent.postList.push(post);

      // this.refreshPage(); // refreshuj stranicu - ne valja rjesenje !!!

      // this.postService.postsUpdated.next([...this])
      createdPost => {
        console.log(createdPost);
        this.postList.push(post);
      },
      err => console.log(err));
  }

  list() {
    this.router.navigate(['postlist']);
  }
}

