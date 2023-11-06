import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {



  constructor(
    private readonly http: HttpClient
  ) { }

  getPost(userId: number): Observable<Post[]> {
    return this.http.get<Post[]>(this.getPostUrl(userId));
  }

  getPostUrl(userId: number) {
    return `https://jsonplaceholder.typicode.com/users/${userId}/posts`;
  }

  createPost(request: Post) {
    return this.http.post<Post>(this.getCreatePostUrl, request)
  }

  get getCreatePostUrl() {
    return 'https://jsonplaceholder.typicode.com/posts';
  }
}
