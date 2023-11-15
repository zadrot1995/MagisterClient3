import { MatSelectModule } from '@angular/material/select';
import {CdkTextareaAutosize, TextFieldModule} from '@angular/cdk/text-field';
import {Component, NgZone, ViewChild} from '@angular/core';
import {take} from 'rxjs/operators';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {User} from "../../interfaces/User";
@Component({
  selector: 'app-create-edit-project',
  templateUrl: './create-edit-project.component.html',
  styleUrls: ['./create-edit-project.component.css']
})
export class CreateEditProjectComponent {


  public project: {
    name: string;
    description: string;
    team: User[]; // Change this to an array of strings
    technologies: string[]; // Change this to an array of strings
  } = {
    name: '',
    description: '',
    team: [],
    technologies: [],
  };

  selectedPerson: User = {name:'', position: '', photoUrl: ''};
  selectedTechnology: string = '';

  addPerson() {
    if (this.selectedPerson && !this.project.team.includes(this.selectedPerson)) {
      this.project.team.push(this.selectedPerson);
    }
  }

  removePerson(person: User) {
    const index = this.project.team.indexOf(person);
    if (index >= 0) {
      this.project.team.splice(index, 1);
    }
  }

  addTechnology() {
    if (this.selectedTechnology && !this.project.technologies.includes(this.selectedTechnology)) {
      this.project.technologies.push(this.selectedTechnology);
    }
  }

  removeTechnology(tech: string) {
    const index = this.project.technologies.indexOf(tech);
    if (index >= 0) {
      this.project.technologies.splice(index, 1);
    }
  }

  createProject() {
    // Handle the creation of the project, e.g., send data to a service or API
    console.log(this.project);
    // Reset the form fields
    this.project = {
      name: '',
      description: '',
      team: [],
      technologies: []
    };
  }
}
