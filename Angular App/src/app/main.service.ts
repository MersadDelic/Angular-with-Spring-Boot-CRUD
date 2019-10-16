import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MainService {

  public API = '//localhost:9090/api';
  public api = this.API;

  constructor(private http: HttpClient) {
  }

  savePost(post: any): Observable<any> {
    return this.http.post(this.API + '/posts', post);
  }

  getPosts(): Observable<any> {
    return this.http.get(this.API + '/getposts');
  }
}
