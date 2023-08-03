import {Component, HostListener, Input} from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDrawer} from "@angular/material/sidenav";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  // @ts-ignore
  @Input() drawer: MatDrawer;
  isNavbarFixed: boolean = false;
  showFiller = false;

  @HostListener('window:scroll', ['$event']) onScroll() {
    if (window.scrollY > 5) {
      this.isNavbarFixed = true;
    } else {
      this.isNavbarFixed = false;
    }
  }
  constructor(public _authenticationService: AuthenticationService) {
  }
}
