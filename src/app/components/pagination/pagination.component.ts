import { Component } from '@angular/core';
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  length = 50;
  pageSize = 9;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];

  hidePageSize = true;
  showPageSizeOptions = false;
  showFirstLastButtons = true;
  disabled = false;

  pageEvent: PageEvent = new PageEvent();

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }
}
