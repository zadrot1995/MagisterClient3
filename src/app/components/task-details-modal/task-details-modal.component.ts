import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Card} from "../../interfaces/Card";

@Component({
  selector: 'app-task-details-modal',
  templateUrl: './task-details-modal.component.html',
  styleUrls: ['./task-details-modal.component.css']
})
export class TaskDetailsModalComponent {

  constructor(public dialogRef: MatDialogRef<TaskDetailsModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Card,) {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  comments: string[] = [];

  addComment(comment: string) {
    this.comments.push(comment);
  }
}
