import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PostService} from "../post.service";
import {Router} from "@angular/router";
import {PostListComponent} from "../post-list/post-list.component";
import {Post} from "../post";

@Component({
  selector: 'app-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  showModal: any;
  postForm: FormGroup;

  constructor(private route: Router, private postService: PostService, private postListComponent: PostListComponent) {
    this.postForm = new FormGroup({
      'title': new FormControl(null, [Validators.required]),
      'description': new FormControl(null, [Validators.required]),
      'content': new FormControl(null, [Validators.required])

    });
  }

  ngOnInit() {
  }

  savePost() {
    const post = new Post(); // ovdje npr ne znamo jos koji ce biti id jer ce ga dobiti tek kad se unese u bazu (auto generate)
    post.title = this.postForm.value.title;
    post.description = this.postForm.value.description;
    post.content = this.postForm.value.content;

    console.log('create-post created:' + post);

    this.postService.savePost(post).subscribe(
      () => {
        console.log('postojeca lista:' + this.postListComponent.postList);

        // this.postListComponent.postList.push(post);

        this.refreshPage(); // refreshuj stranicu - ne valja rjesenje !!!

        // this.postService.postsUpdated.next([...this])

      },
      err => console.log(err)
    );
  }

  private refreshPage(): void {
    window.location.reload();
  }
}
