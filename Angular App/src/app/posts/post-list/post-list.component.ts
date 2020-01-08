import {Component, Injectable, OnInit} from '@angular/core';
import {PostService} from '../post.service';
import {Router} from '@angular/router';
import {Post} from '../post';
import {FormControl, FormGroup, Validators} from '@angular/forms';


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
  postForm: FormGroup;
  post: Post = new Post();

  constructor(private route: Router, private postService: PostService) {
    this.postForm = new FormGroup({
      'title': new FormControl(null, [Validators.required]),
      'description': new FormControl(null, [Validators.required]),
      'content': new FormControl(null, [Validators.required])

    });
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

  postdetails(id: number) {
    this.route.navigate(['details', id]);
  }

  savePost() {
    const post = new Post(); // ovdje npr ne znamo jos koji ce biti id jer ce ga dobiti tek kad se unese u bazu (auto generate)
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

  /*this.postSub = this.postService.getPostUpdateListener()
    .subscribe(
      (posts: Post[]) => {
        this.postList = posts;
      }
    );*/

  }
}
