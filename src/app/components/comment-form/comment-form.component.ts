import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
