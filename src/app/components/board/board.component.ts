import { Component } from '@angular/core';
import {List} from "../../interfaces/List";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})

export class BoardComponent {
  board: List[] = [
    {
      title: 'To Do',
      cards: [
        {
          title: 'Task 1',
          assignedUser: {
            name: 'John Doe',
            photoUrl: 'path-to-johns-photo.jpg' // Replace with the actual photo URL
          }
        },
        {
          title: 'Task 2',
          assignedUser: {
            name: 'John Doe',
            photoUrl: 'path-to-johns-photo.jpg' // Replace with the actual photo URL
          }
        },
        // ... other cards
      ]
    },
    {
      title: 'In Progress',
      cards: [
        {
          title: 'Task 3',
          assignedUser: {
            name: 'John Doe',
            photoUrl: 'path-to-johns-photo.jpg' // Replace with the actual photo URL
          }
        },
        // ... other cards
      ]
    },
    {
      title: 'On Review',
      cards: [
        {
          title: 'Task 4',
          assignedUser: {
            name: 'John Doe',
            photoUrl: 'path-to-johns-photo.jpg' // Replace with the actual photo URL
          }
        },
        {
          title: 'Task 5',
          assignedUser: {
            name: 'John Doe',
            photoUrl: 'path-to-johns-photo.jpg' // Replace with the actual photo URL
          }
        },
        {
          title: 'Task 6',
          assignedUser: {
            name: 'John Doe',
            photoUrl: 'path-to-johns-photo.jpg' // Replace with the actual photo URL
          }
        },
        {
          title: 'Task 7',
          assignedUser: {
            name: 'John Doe',
            photoUrl: 'path-to-johns-photo.jpg' // Replace with the actual photo URL
          }
        },
        // ... other cards
      ]
    },
    {
      title: 'Done',
      cards: [
        {
          title: 'Task 8',
          assignedUser: {
            name: 'John Doe',
            photoUrl: 'path-to-johns-photo.jpg' // Replace with the actual photo URL
          }
        },
        {
          title: 'Task 9',
          assignedUser: {
            name: 'John Doe',
            photoUrl: 'path-to-johns-photo.jpg' // Replace with the actual photo URL
          }
        },
        // ... other cards
      ]
    },
    // ... other lists
  ];
  constructor() {
    window.scrollTo(0, 0);
  }
}
