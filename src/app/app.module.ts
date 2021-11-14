import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './additionally/header/header.component';
import {SideMenuStudentComponent} from './additionally/side-menu-student/side-menu-student.component';
import {HomePageComponent} from './default/home-page/home-page.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {GradeBookPageComponent} from './student/grade-book-page/grade-book-page.component';
import {SchedulePageComponent} from './default/schedule-page/schedule-page.component';
import {CertificatePageComponent} from './student/certificate-page/certificate-page.component';
import {DocumentsPageComponent} from './student/documents-page/documents-page.component';
import {EventsPageComponent} from './student/events-page/events-page.component';
import {VacancyPageComponent} from './student/vacancy-page/vacancy-page.component';
import {ProfileStudentComponent} from './additionally/profile-student/profile-student.component';
import {ListsGroupsPageComponent} from './teacher/lists-groups-page/lists-groups-page.component';
import {StatementPageComponent} from './teacher/statement-page/statement-page.component';
import {DirectionPageComponent} from './teacher/direction-page/direction-page.component';
import {LoginPageComponent} from './default/login-page/login-page.component';
import {NotFoundPageComponent} from './default/not-found-page/not-found-page.component';
import {SideMenuTeacherComponent} from './additionally/side-menu-teacher/side-menu-teacher.component';
import {ProfileTeacherComponent} from './additionally/profile-teacher/profile-teacher.component';
import {ProfilePageComponent} from './default/profile-page/profile-page.component';
import {SideMenuOfficeComponent} from './additionally/side-menu-office/side-menu-office.component';
import {MatStepperModule} from "@angular/material/stepper";
import {MatButtonModule} from "@angular/material/button";
import {MatRadioModule} from "@angular/material/radio";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {LayoutModule} from "@angular/cdk/layout";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideMenuStudentComponent,
    HomePageComponent,
    GradeBookPageComponent,
    SchedulePageComponent,
    CertificatePageComponent,
    DocumentsPageComponent,
    EventsPageComponent,
    VacancyPageComponent,
    ProfileStudentComponent,
    ListsGroupsPageComponent,
    StatementPageComponent,
    DirectionPageComponent,
    LoginPageComponent,
    NotFoundPageComponent,
    SideMenuTeacherComponent,
    ProfileTeacherComponent,
    ProfilePageComponent,
    SideMenuOfficeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatSidenavModule,
    MatButtonModule,
    MatRadioModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatAutocompleteModule,
    MatToolbarModule,
    MatIconModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
