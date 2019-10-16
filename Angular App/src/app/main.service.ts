import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class MainService {

  public API = '//localhost:8080/api';
  public api = this.API;

  constructor(private http: HttpClient) {
  }


  savePost(post: any): Observable<any> {
    return this.http.post(this.API + '/posts', post);
  }


  getPost(): Observable<any> {
    return this.http.get(this.API + '/getposts');
  }
}
