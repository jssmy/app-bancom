import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserPost } from '../models/user-post';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  get url() {
    return 'https://jsonplaceholder.typicode.com/users'
  }
  constructor(
    private readonly http: HttpClient
  ) { }

  getUsers(): Observable<UserPost[]> {
    return this.http.get<UserPost[]>(this.url);
  }
}
