/* eslint-disable no-shadow */

import { QUESTION_ID } from './enums';

export type Option = {
  value: string;
  label: string;
};

export type QuestionDisplayCondition = {
  questionId: QUESTION_ID;
  value: string | ((answer: Answer) => boolean);
};

export enum QuestionType {
  RADIO = 'radio',
  CHECKBOX = 'checkbox',
  TEXT = 'text',
  DROPDOWN = 'dropdown',
}

export type Question =
  | CheckboxQuestion
  | RadioQuestion
  | InputQuestion
  | DropdownQuestion;
export type Answer = RadioAnswer | CheckboxAnswer | TextAnswer | DropdownAnswer;

export type RadioAnswer = Option | null;
export type CheckboxAnswer = Option[] | null;
export type TextAnswer = string | null;
export type DropdownAnswer = Option | null;

export type CheckboxQuestion = {
  id: QUESTION_ID;
  title: string;
  type: QuestionType.CHECKBOX;
  defaultValue?: string | number | string[] | number[];
  description?: string;
  showIf?: QuestionDisplayCondition[];
  options: Option[];
};

export type RadioQuestion = {
  id: QUESTION_ID;
  title: string;
  type: QuestionType.RADIO;
  defaultValue?: string | number | string[] | number[];
  description?: string;
  showIf?: QuestionDisplayCondition[];
  options: Option[];
};

export type InputQuestion = {
  id: QUESTION_ID;
  title: string;
  type: QuestionType.TEXT;
  defaultValue?: string;
  placeholders?: string[];
  placeholder?: string;
  description?: string;
  showIf?: QuestionDisplayCondition[];
  options?: string[];
};

export type DropdownQuestion = {
  id: QUESTION_ID;
  title: string;
  type: QuestionType.DROPDOWN;
  defaultValue?: string;
  placeholder?: string;
  description?: string;
  showIf?: QuestionDisplayCondition[];
  options: Option[];
};

export type AnswerMap = { [question in QUESTION_ID]: Answer };
