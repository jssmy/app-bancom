import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUserComponent } from './list-user.component';
import { UserService } from '../commons/services/user.service';
import { PostService } from '../commons/services/post.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { of } from 'rxjs';
import { mockUserPost } from '../commons/services/user.service.spec';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { mockPosts } from '../commons/services/post.service.spec';
import { AddPostComponent } from '../add-post/add-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('ListUserComponent', () => {
  let component: ListUserComponent;
  let fixture: ComponentFixture<ListUserComponent>;
  let userService: UserService;
  let postService: PostService;
  let diaglo: MatDialog;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      declarations: [ ListUserComponent, AddPostComponent],
      imports: [
        MatDialogModule,
        HttpClientTestingModule,
        MatExpansionModule,
        MatListModule,
        MatButtonModule,
        MatDialogModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [
        UserService,
        PostService,
        MatDialog
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUserComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);
    postService = TestBed.inject(PostService);
    diaglo = TestBed.inject(MatDialog);

    spyOn(userService, 'getUsers').and.returnValues(of(mockUserPost));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('validar que se obtenga el post x usuario', () => {
    spyOn(postService, 'getPost').and.returnValue(of(mockPosts));
    component.onExpand(1);
    expect(postService.getPost).toHaveBeenCalledWith(1);

  });

  it('se abre el formulario par crear nuevo post', () => {
    spyOn(diaglo, 'open').and.callThrough();
    component.onAddPost(1);
    expect(diaglo.open).toHaveBeenCalled();
  });
});
