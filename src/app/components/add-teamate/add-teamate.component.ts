import {Component, Input} from '@angular/core';
import {TaskDetailsModalComponent} from "../task-details-modal/task-details-modal.component";
import {MatDialog} from "@angular/material/dialog";
import {User} from "../../interfaces/User";
import {AddTeamateModalComponent} from "../add-teamate-modal/add-teamate-modal.component";

@Component({
  selector: 'app-add-teamate',
  templateUrl: './add-teamate.component.html',
  styleUrls: ['./add-teamate.component.css']
})
export class AddTeamateComponent {
  @Input() users: User[] = [];

  constructor(public dialog: MatDialog) {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddTeamateModalComponent, {
      hasBackdrop: false,
      data: this.users
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      debugger;
      this.users = result;
      debugger;
    });
  }
}
