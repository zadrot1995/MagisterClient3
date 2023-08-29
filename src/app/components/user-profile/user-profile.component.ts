import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  user = {
    photo: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww&w=1000&q=80",
    name: 'John Doe',
    age:24,
    description: "Amidst the tranquil hills and rolling valleys, a world of mystery and wonder awaits. The breeze whispers secrets to the trees, while the sun paints the sky in hues of gold and orange. Birds dance in the air, their melodies a symphony of nature's song. As time weaves its tapestry, the path ahead is both known and unknown, a journey of discovery and adventure.",
    companies: ['Company A', 'Company B', 'Company C'],
    projects: ['Project X', 'Project Y', 'Project Z'],
    skills: ['Angular', 'JavaScript', 'HTML', 'CSS']
  };
  constructor() {
    window.scrollTo(0, 0);
  }
}
