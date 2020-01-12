import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {
  }

  public API = '//localhost:8080/api';

  savePost(post: any): Observable<any> {
    return this.http.post(this.API + '/posts', post);
  }

  getPosts(): Observable<any> {
    return this.http.get(this.API + '/posts');
  }

  getPost(id: number): Observable<any> {
    return this.http.get(this.API + `/posts/${id}`);
  }
  updatePost(id: number): Observable<any> {
    return this.http.get(this.API + `/posts/${id}`);
  }
}
