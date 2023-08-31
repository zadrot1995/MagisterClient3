import {Component, Input} from '@angular/core';
import {Card} from "../../interfaces/Card";
  import {MatDialog} from "@angular/material/dialog";
import {TaskDetailsModalComponent} from "../task-details-modal/task-details-modal.component";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() card!: Card;
  @Input() status!: string;
  constructor(public dialog: MatDialog) {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TaskDetailsModalComponent, {
      data: this.card,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.card = result;
    });
  }
}
