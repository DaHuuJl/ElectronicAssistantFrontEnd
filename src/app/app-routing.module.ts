import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./default/home-page/home-page.component";
import {SchedulePageComponent} from "./default/schedule-page/schedule-page.component";
import {ProfileStudentComponent} from "./additionally/profile-student/profile-student.component";
import {ReferencePageComponent} from "./student/reference-page/reference-page.component";
import {DocumentsPageComponent} from "./student/documents-page/documents-page.component";
import {EventsPageComponent} from "./student/events-page/events-page.component";
import {ListsGroupsPageComponent} from "./teacher/lists-groups-page/lists-groups-page.component";
import {VacancyPageComponent} from "./student/vacancy-page/vacancy-page.component";
import {GradeBookPageComponent} from "./student/grade-book-page/grade-book-page.component";
import {NotFoundPageComponent} from "./default/not-found-page/not-found-page.component";
import {LoginPageComponent} from "./default/login-page/login-page.component";
import {SurveyConstructorComponent} from "./additionally/survey/survey-constructor/survey-constructor.component";


const routes: Routes = [
  //Student
  { path: 'grade-book', component: GradeBookPageComponent },
  { path: 'reference', component: ReferencePageComponent },
  { path: 'documents', component: DocumentsPageComponent },
  { path: 'events', component: EventsPageComponent },
  { path: 'vacancy', component: /*VacancyPageComponent*/ SurveyConstructorComponent},

  //Teacher
  { path: 'groups', component: ListsGroupsPageComponent },


  //Office


  //Default
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'schedule', component: SchedulePageComponent },
  { path: 'notfound', component: NotFoundPageComponent },
  { path: 'profile', component: ProfileStudentComponent },

  //ALL
  { path: 'survey-constructor', component: SurveyConstructorComponent },


  { path: '', component: HomePageComponent },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
