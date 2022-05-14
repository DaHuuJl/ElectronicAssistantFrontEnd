import {Component, OnInit} from '@angular/core';
import {MatDrawerMode} from "@angular/material/sidenav";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import {IQuestionCreating} from "../../../shared/model/Model";
import {QuestionType} from "../../../shared/model/Enums";

@Component({
  selector: 'app-survey-constructor',
  templateUrl: './survey-constructor.component.html',
  styleUrls: ['./survey-constructor.component.css']
})
export class SurveyConstructorComponent implements OnInit {
  public menuPath = 'survey';
  menuStatus!: boolean
  burgerHide!: boolean
  burgerStatusHide!: boolean
  mode!: MatDrawerMode

  surveyTitle: string = "Новый опрос"
  surveyDescription: string = "Описание опроса"
  questions: Array<IQuestionCreating> = []
  htmlContent: any;

  constructor() {
  }

  ngOnInit(): void {
    if(window.screen.availWidth >= 1000) {
      this.mode = "side"
      this.burgerStatusHide = true
      this.menuStatus = false
      this.burgerHide = false

      this.clickOnButton()
    } else {
      this.mode = "over"
      this.menuStatus = false
      this.burgerHide = false
    }
    this.addDefaultQuestion()
    this.addDefaultQuestion()
    this.addDefaultQuestion()
  }

  public menuStatusReplace() {
    this.menuStatus = !this.menuStatus
    this.burgerHide = !this.burgerHide
    this.clickOnButton()
  }

  public clickOnButton() {
    let element: HTMLElement = document.getElementById('toggle') as HTMLElement;
    element.click();
  }

  public print() {
    console.log(this.questions)
  }

  public save() {
  }

  public addDefaultQuestion() {
    let k = this.questions.length + 1
    let defaultQuestion: IQuestionCreating = {
      id: k,
      title: "Вопрос без заголовка",
      description: "",
      questionType: QuestionType.ONE_OF_THE_LIST,
      other: false,
      mandatory: false,
      image: "",
      responseOptions: [{
        id: 0,
        title: "Вариант ответа",
        image: ""
      }]
    }
    this.questions.push(defaultQuestion)
  }

  public drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.questions, event.previousIndex, event.currentIndex);
  }
}
