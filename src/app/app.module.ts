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
import { BoardComponent } from './components/board/board.component';
import { CardComponent } from './components/card/card.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ListComponent } from './components/list/list.component';
import { TaskDetailsModalComponent } from './components/task-details-modal/task-details-modal.component';
import {MatDialog, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import { CommentFormComponent } from './components/comment-form/comment-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CommentListComponent } from './components/comment-list/comment-list.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {TextFieldModule} from "@angular/cdk/text-field";
import { CreateEditProjectComponent } from './components/create-edit-project/create-edit-project.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import { AddTeamateComponent } from './components/add-teamate/add-teamate.component';
import { AddTeamateModalComponent } from './components/add-teamate-modal/add-teamate-modal.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { AddUserCardComponent } from './components/add-user-card/add-user-card.component';
import { AddUserListComponent } from './components/add-user-list/add-user-list.component';

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
  {
    path: 'projects/project-details/board',
    component: BoardComponent,
  },
  {
    path: 'projects/create-project',
    component: CreateEditProjectComponent,
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
    UserProfileComponent,
    BoardComponent,
    CardComponent,
    ListComponent,
    TaskDetailsModalComponent,
    CommentFormComponent,
    CommentListComponent,
    CreateEditProjectComponent,
    PaginationComponent,
    AddTeamateComponent,
    AddTeamateModalComponent,
    AddUserCardComponent,
    AddUserListComponent,
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
        // MatDialogRef<TaskDetailsModalComponent>,
        NgOptimizedImage,
        MatListModule,
        MatChipsModule,
        MatLegacyChipsModule,
        DragDropModule,
        MatDialogModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatInputModule,
        TextFieldModule,
        FormsModule,
        MatPaginatorModule,
        MatProgressSpinnerModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
