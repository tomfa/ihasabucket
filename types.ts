/* eslint-disable no-shadow */

import { QUESTION_ID, VALUES } from './enums';

export type Option = {
  value: string;
  label: string;
};

export type QuestionDisplayCondition = {
  questionId: QUESTION_ID;
  value: string | VALUES;
};

export enum QuestionType {
  RADIO = 'radio',
  CHECKBOX = 'checkbox',
  TEXT = 'text',
  DROPDOWN = 'dropdown',
}

export type Question = CheckboxQuestion | InputQuestion | DropdownQuestion;

export type CheckboxQuestion = {
  id: QUESTION_ID;
  title: string;
  type: QuestionType.RADIO | QuestionType.CHECKBOX;
  defaultValue?: string | number | string[] | number[];
  description?: string;
  showIf?: QuestionDisplayCondition[];
  options: Option[];
};

export type RadioQuestion = CheckboxQuestion;

export type InputQuestion = {
  id: QUESTION_ID;
  title: string;
  type: QuestionType.TEXT;
  defaultValue?: string;
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
