import {Component, Input} from '@angular/core';
import {User} from "../../interfaces/User";

@Component({
  selector: 'app-add-user-list',
  templateUrl: './add-user-list.component.html',
  styleUrls: ['./add-user-list.component.css']
})
export class AddUserListComponent {
 @Input() users: User[] = [];
 @Input() team: User[] = [];
}
