import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-survey-constructor-header',
  templateUrl: './survey-constructor-header.component.html',
  styleUrls: ['./survey-constructor-header.component.css']
})
export class SurveyConstructorHeaderComponent implements OnInit {
  @Input() surveyTitle!: string
  @Input() surveyDescription!: string

  @Output() surveyTitleChange = new EventEmitter<string>()
  @Output() surveyDescriptionChange = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  onChangeTitle(surveyTitle: string) {
    this.surveyTitle = surveyTitle;
    this.surveyTitleChange.emit(this.surveyTitle)
  }

  onChangeDescription(surveyDescription: string) {
    this.surveyDescription = surveyDescription;
    this.surveyDescriptionChange.emit(this.surveyDescription)
  }
}
