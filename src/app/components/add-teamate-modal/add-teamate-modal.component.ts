import {Component, Inject, Input} from '@angular/core';
import {User} from "../../interfaces/User";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Card} from "../../interfaces/Card";

@Component({
  selector: 'app-add-teamate-modal',
  templateUrl: './add-teamate-modal.component.html',
  styleUrls: ['./add-teamate-modal.component.css']
})
export class AddTeamateModalComponent {

  searchTerm: string = '';
  loading: boolean = false;
  results: User[] = [];

  onSearch() {
    // Perform search logic here (e.g., make an API call)
    // For the sake of this example, simulate a delay with setTimeout
    this.loading = true;
    setTimeout(() => {
      this.results = this.availableUsers.filter( item =>
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
      console.log(this.results);
      // Replace with actual search results
      this.loading = false;
    }, 1000);
  }

  @Input() availableUsers: User[] = [
    {
      name: "James Matias",
      photoUrl: "https://apiwp.thelocal.com/cdn-cgi/image/format=webp,width=855,quality=75/https://apiwp.thelocal.com/wp-content/uploads/2018/12/6d67730d16af04f3f956389d4cc244af808b8381c23b1e3d218ecd792de14fa8.jpg",
      position:"Senior Java Developer"
    },
    {
      name: "Robert Richardson",
      photoUrl: "https://preview.redd.it/created-random-people-using-chatgpt-midjourney-do-you-know-v0-q1aa450i5dqb1.png?width=1024&format=png&auto=webp&s=c4e9abc47d193474a2fa1a7e337d9d9340dce947",
      position:"Java Developer"
    },
    {
      name: "July Hampton",
      photoUrl: "https://live.staticflickr.com/5252/5403292396_0804de9bcf_b.jpg",
      position:"Front-end Developer"
    },
    {
      name: "Emy Lee",
      photoUrl: "https://miro.medium.com/v2/resize:fit:1400/1*y_uyQN1xEjppGVWJJkibMQ.jpeg",
      position:"Project Manager"
    },
    {
      name: "Sam Morales",
      photoUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/35af6a41332353.57a1ce913e889.jpg",
      position:"QA"
    }
  ];
  constructor(public dialogRef: MatDialogRef<AddTeamateModalComponent>,
              @Inject(MAT_DIALOG_DATA) public team: User[],) {
    this.results = this.availableUsers;
  }

  onNoClick(): void {
    this.dialogRef.close(this.team);
  }
  addUser(user: User) {
    this.team.push(user);
    debugger;
    this.onNoClick();
  }
}
