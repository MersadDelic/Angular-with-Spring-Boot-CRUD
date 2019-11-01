import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  public API = '//localhost:8080/api';
  public api = this.API;

  constructor(private http: HttpClient) {
  }

  savePost(post: any): Observable<any> {
    return this.http.post(this.API + '/posts', post);
  }

  getPosts(): Observable<any> {
    return this.http.get(this.API + '/getposts');
  }

  getPost(id: number): Observable<any> {
    return this.http.get(this.API + `/getpost/${id}`);
  }
}
