import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './additionally/header/header.component';
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
import {ProfileTeacherComponent} from './additionally/profile-teacher/profile-teacher.component';
import {ProfilePageComponent} from './default/profile-page/profile-page.component';
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
import {MatTabsModule} from "@angular/material/tabs";
import {MatListModule} from "@angular/material/list";
import {HttpClientModule} from "@angular/common/http";
import {SurveyConstructorComponent} from './survey/survey-constructor/survey-constructor.component';
import {DragDropModule} from "@angular/cdk/drag-drop";
import {SurveyConstructorHeaderComponent} from './survey/survey-constructor-header/survey-constructor-header.component';
import {
  SurveyConstructorSidePanelComponent
} from './survey/survey-constructor-side-panel/survey-constructor-side-panel.component';
import {
  SurveyConstructorQuestionComponent
} from './survey/survey-constructor-question/survey-constructor-question.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatTooltipModule} from "@angular/material/tooltip";
import {TestMenuComponent} from './test-menu/test-menu.component';
import {SideMenuComponent} from './additionally/side-menu/side-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
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
    ProfileTeacherComponent,
    ProfilePageComponent,
    SurveyConstructorComponent,
    SurveyConstructorHeaderComponent,
    SurveyConstructorSidePanelComponent,
    SurveyConstructorQuestionComponent,
    TestMenuComponent,
    SideMenuComponent,
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
    LayoutModule,
    MatTabsModule,
    MatListModule,
    HttpClientModule,
    DragDropModule,
    MatSlideToggleModule,
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
