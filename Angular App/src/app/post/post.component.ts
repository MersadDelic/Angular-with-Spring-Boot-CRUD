import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MainService} from "../main.service";
import {Router} from "@angular/router";
import {all} from "codelyzer/util/function";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  showModal: any;
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


    this.postForm.reset();

    this.mainService.savePost(post).subscribe(
      () => {
      },
      err => console.log(err)
    );

  }

}
