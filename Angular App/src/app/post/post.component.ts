import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MainService} from "../main.service";
import {Router} from "@angular/router";
import {PostListComponent} from "../post-list/post-list.component";
import {Post} from "../post";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  showModal: any;
  postForm: FormGroup;

  constructor(private route: Router, private mainService: MainService, private postListComponent: PostListComponent) {
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

    console.log('post created:' + post);

    this.mainService.savePost(post).subscribe(
      () => {
        console.log('postojeca lista:' + this.postListComponent.postList);

        // this.postListComponent.postList.push(post);

        window.location.reload(); // refreshuj stranicu - ne valja rjesenje !!!

      },
      err => console.log(err)
    );
  }
}
