import { Component, OnInit } from '@angular/core';
import { UserService } from '../commons/services/user.service';
import { UserPost } from '../commons/models/user-post';
import { PostService } from '../commons/services/post.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  displayedColumns: string[] = ['name', 'username','address', 'email', 'phone' ,'post'];
  dataSource: UserPost[] = [];
  panelOpenState = false;

  constructor(
    private readonly userService: UserService,
    private readonly postService: PostService
  ) { }

  ngOnInit(): void {
    this.userService.getUsers()
    .subscribe(users => this.dataSource = users);
  }


  onExpand(userId: number) {
    const user = this.dataSource.find(usr => usr.id === userId);
    user.posts = [];
    this.postService.getPost(userId)
    .subscribe(posts => {
      const user = this.dataSource.find(usr => usr.id === userId);
      user.posts = posts;
    });
  }
}
