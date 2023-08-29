import {Component, Input} from '@angular/core';
import {CardComponent} from "../card/card.component";
import {List} from "../../interfaces/List";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() list!: List;

}
