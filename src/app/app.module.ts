import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import {RouterModule, RouterOutlet, Routes} from "@angular/router";
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SingInComponent } from './components/sing-in/sing-in.component';
import { SingUpComponent } from './components/sing-up/sing-up.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import { SingInOrSingUpComponent } from './components/sing-in-or-sing-up/sing-in-or-sing-up.component';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import { PointsComponent } from './components/points/points.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import { SidenavComponent } from './components/sidenav/sidenav.component';
import {MatGridListModule} from "@angular/material/grid-list";
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectsCardComponent } from './components/projects-card/projects-card.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { ProjectDetailsDescriptionComponent } from './components/project-details-description/project-details-description.component';
import { ProjectDetailsTechnplogyComponent } from './components/project-details-technplogy/project-details-technplogy.component';
import {NgOptimizedImage} from "@angular/common";
import { UserCardComponent } from './components/user-card/user-card.component';
import { ProjectDetailsBannerComponent } from './components/project-details-banner/project-details-banner.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import {MatListModule} from "@angular/material/list";
import {MatChipsModule} from "@angular/material/chips";
import {MatLegacyChipsModule} from "@angular/material/legacy-chips";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'sign-in',
    component: SingInComponent,
  },
  {
    path: 'sign-up',
    component: SingUpComponent,
  },
  {
    path: 'signIn-or-signUp',
    component: SingInOrSingUpComponent,
  },
  {
    path: 'sidenav',
    component: SidenavComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'projects/project-details',
    component: ProjectDetailsComponent,
  },
  {
    path: 'user-profile',
    component: UserProfileComponent,
  },
  ];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SingInComponent,
    SingUpComponent,
    SingInOrSingUpComponent,
    PointsComponent,
    SidenavComponent,
    ProjectsComponent,
    ProjectsCardComponent,
    ProjectDetailsComponent,
    ProjectDetailsDescriptionComponent,
    ProjectDetailsTechnplogyComponent,
    UserCardComponent,
    ProjectDetailsBannerComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSidenavModule,
    MatGridListModule,
    NgOptimizedImage,
    MatListModule,
    MatChipsModule,
    MatLegacyChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
