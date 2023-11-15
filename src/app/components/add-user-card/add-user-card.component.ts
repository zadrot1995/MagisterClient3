import {Component, Input} from '@angular/core';
import {User} from "../../interfaces/User";

@Component({
  selector: 'app-add-user-card',
  templateUrl: './add-user-card.component.html',
  styleUrls: ['./add-user-card.component.css']
})
export class AddUserCardComponent {
  @Input() user: User = { name: "", photoUrl: "", position: ""};
  @Input() team: User[] = [];
  Delete(user: User){
    const index = this.team.indexOf(user);
    if (index !== -1) {
      this.team.splice(index, 1);
    }
  }
  Add(user: User){
    this.team.push(user);
  }
}
