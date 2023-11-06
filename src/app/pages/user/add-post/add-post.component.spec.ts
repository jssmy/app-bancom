import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPostComponent } from './add-post.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PostService } from '../commons/services/post.service';
import { Post } from '../commons/models/post';

describe('AddPostComponent', () => {
  let component: AddPostComponent;
  let fixture: ComponentFixture<AddPostComponent>;
  let postService: PostService;

  beforeEach(async () => {
    
    await TestBed.configureTestingModule({
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      declarations: [ AddPostComponent ],
      imports: [
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule
      ],
      providers: [
        { provide: MatDialogRef, useValue: [] },
        {
          provide: MAT_DIALOG_DATA,
          useValue: { userId: 1 }
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPostComponent);
    component = fixture.componentInstance;
    postService = TestBed.inject(PostService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('guardar post', () => {
    spyOn(postService, 'createPost').and.callThrough();

    component.form.get('title').setValue('titulo de post');
    component.form.get('description').setValue('descripcion de post');
    fixture.detectChanges();
    const buttonSave = fixture.debugElement.nativeElement.querySelector('#button-save');
    buttonSave.click();
    expect(buttonSave).toBeTruthy();
    expect(postService.createPost).toHaveBeenCalled();
  });
});
