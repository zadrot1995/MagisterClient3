import {Component, HostListener} from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  isNavbarFixed: boolean = false;
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
