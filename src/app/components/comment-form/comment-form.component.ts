import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {CdkTextareaAutosize, TextFieldModule} from '@angular/cdk/text-field';
import {NgZone, ViewChild} from '@angular/core';
import {take} from 'rxjs/operators';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent {
  commentForm: FormGroup;
  @Output() commentAdded = new EventEmitter<string>();
  constructor(private formBuilder: FormBuilder) {
    this.commentForm = this.formBuilder.group({
      commentText: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.commentForm.valid) {
      const commentText = this.commentForm.value.commentText;
      this.commentAdded.emit(commentText);
      this.commentForm.reset();
    }
  }
}
