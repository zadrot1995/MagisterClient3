import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-projects-card',
  templateUrl: './projects-card.component.html',
  styleUrls: ['./projects-card.component.css']
})
export class ProjectsCardComponent {
  @Input() description = '';
  @Input() icon = '';
  @Input() name = '';

}
