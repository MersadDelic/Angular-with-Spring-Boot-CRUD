import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient, private router: Router) {
  }


  savePost(post: any) {
    return this.http.post(`http://localhost:8080/api/posts`, post);
  }


  getPost() {
    return this.http.get('http://localhost:8080/api/getposts');
  }
}
