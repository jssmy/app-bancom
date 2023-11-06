import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Post } from '../commons/models/post';
import { PostService } from '../commons/services/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  form = new FormGroup(
    {
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])
    }
  );

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private postService: PostService
  ) { }

  ngOnInit(): void {
  }

  savePost() {
    const request: Post = {
      title: this.form.get('title').value,
      body: this.form.get('description').value,
      userId: this.data.userId
    };

    this.postService.createPost(request)
    .subscribe(() => this.close());

  }

  close() {
    this.dialogRef.close();
  }

}
