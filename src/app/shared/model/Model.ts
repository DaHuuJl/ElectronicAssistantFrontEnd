import {FormatReference, QuestionType, TypeReference} from "./Enums";

export interface IReferenceRequestInput {
  formatReference: FormatReference,
  typeReference: TypeReference,
  placePresentation: String
}

export interface IUser {
  email: string
}

export interface ISurvey {
  id: number,
  idEvent: number,
  title: string,
  description: string,
}

export interface IQuestion {
  id: number,
  idSurvey: number,
  title: string,
  questionType: QuestionType,
  other: boolean,
  mandatory: boolean,
  image: string
}

export interface IResponseOptions {
  id: number,
  idQuestion: number,
  title: string,
  image: string
}

export interface ISurveyCreating {
  id: number,
  title: string,
  description: string,
  questions: IQuestionCreating[]
}

export interface IQuestionCreating {
  id: number,
  title: string,
  description: string,
  questionType: QuestionType,
  other: boolean,
  mandatory: boolean,
  image: string,
  responseOptions: IResponseOptionsCreating[]
}

export interface IResponseOptionsCreating {
  id?: number,
  title?: string,
  image?: string
}

