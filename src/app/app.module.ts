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
    PointsComponent
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
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
