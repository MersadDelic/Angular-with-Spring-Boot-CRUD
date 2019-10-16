import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MainService} from "../main.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-post-modal',
  templateUrl: './post-modal.component.html',
  styleUrls: ['./post-modal.component.css']
})
export class PostModalComponent implements OnInit {
  postForm: FormGroup;

  constructor(private route: Router, private mainService: MainService) {
    this.postForm = new FormGroup({
      'title': new FormControl(null, [Validators.required]),
      'description': new FormControl(null, [Validators.required]),
      'content': new FormControl(null, [Validators.required])

    });

  }

  ngOnInit() {

  }

  savePost() {

    const post = {


      'title': this.postForm.value.title,
      'description': this.postForm.value.description,
      'content': this.postForm.value.content

    };
    console.log(post);

    this.mainService.savePost(post).subscribe(
      () => {
      },
      err => console.log(err)
    );

  }
}
