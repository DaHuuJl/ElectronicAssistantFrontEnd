import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IQuestionCreating, IResponseOptionsCreating} from "../../../shared/model/Model";
import {QuestionType} from "../../../shared/model/Enums";

@Component({
  selector: 'app-survey-constructor-question',
  templateUrl: './survey-constructor-question.component.html',
  styleUrls: ['./survey-constructor-question.component.css']
})
export class SurveyConstructorQuestionComponent implements OnInit {

  @Input() id!: number
  @Input() title!: string
  @Input() description!: string
  @Input() questionType!: QuestionType
  @Input() other: boolean = false
  @Input() mandatory: boolean = false
  @Input() image!: string
  @Input() responseOptions!: IResponseOptionsCreating[]

  @Output() idChange = new EventEmitter<number>()
  @Output() titleChange = new EventEmitter<string>()
  @Output() descriptionChange = new EventEmitter<string>()
  @Output() questionTypeChange = new EventEmitter<QuestionType>()
  @Output() otherChange = new EventEmitter<boolean>()
  @Output() mandatoryChange = new EventEmitter<boolean>()
  @Output() imageChange = new EventEmitter<string>()
  @Output() responseOptionsChange = new EventEmitter<IResponseOptionsCreating[]>()

  isDescription: boolean = false

  constructor() { }

  ngOnInit(): void {

  }


  /*TODO: Change input vars*/

  onTitleChange(title: string) {
    this.title = title;
    this.titleChange.emit(this.title)
  }

  onDescriptionChange(description: string) {
    this.description = description;
    this.descriptionChange.emit(this.description)
  }

  onQuestionTypeChange(questionType: QuestionType) {
    this.questionType = questionType;
    this.questionTypeChange.emit(this.questionType)
  }

  onOtherChange(other: boolean) {
    this.other = other;
    this.otherChange.emit(this.other)
  }

  onMandatoryChange(mandatory: boolean) {
    this.mandatory = mandatory;
    this.mandatoryChange.emit(this.mandatory)
  }

  onImageChange(image: string) {
    this.image = image;
    this.imageChange.emit(this.image)
  }

  onResponseOptionsChange(responseOptions: IResponseOptionsCreating[]) {
    this.responseOptions = responseOptions;
    this.responseOptionsChange.emit(this.responseOptions)
  }

  onDescription() {
    let description!: string
    if(!this.isDescription)
      description = "Описание вопроса";
    else
      description = '';
    this.onDescriptionChange(description);
  }

  delete() {

  }
}
