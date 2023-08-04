import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-project-details-technplogy',
  templateUrl: './project-details-technplogy.component.html',
  styleUrls: ['./project-details-technplogy.component.css']
})
export class ProjectDetailsTechnplogyComponent {
  @Input() text = '';
  @Input() icon = '';

}
