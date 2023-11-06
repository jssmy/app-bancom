import { TestBed } from '@angular/core/testing';

import { PostService } from './post.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Post } from '../models/post';
export const mockPosts: Post[] = [
  {
    'userId': 1,
    'id': 1,
    'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    'body': 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
  },
  {
    'userId': 1,
    'id': 2,
    'title': 'qui est esse',
    'body': 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'
  }
];

describe('PostService', () => {
  let service: PostService;
  let httpMock: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(PostService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('crear un post nuevo', () => {
    const request = {
      body: 'descripcion del post',
      title: 'titulo del post',
      userId: 1
    };
    service.createPost(request).subscribe(post => {
      expect(post).toBeTruthy();
      expect(post.id).toBe(100);
    });

    const req = httpMock.expectOne(service.getCreatePostUrl);
    req.flush({
      ...request,
      id: 100
    } as Post);
  });

  it('obtener post de usuario', () => {
    service.getPost(1).subscribe(posts => {
      expect(posts.length).toBeGreaterThan(0);
    });

    const req = httpMock.expectOne(service.getPostUrl(1));

    req.flush(mockPosts);
  })


});
