import { QUESTION_ID, VALUES } from './enums';

export type Option = {
  value: string;
  label: string;
};

export type QuestionDisplayCondition = {
  questionId: QUESTION_ID;
  value: string | VALUES;
};

export type Question = CheckboxQuestion | InputQuestion | DropdownQuestion;

export type CheckboxQuestion = {
  id: QUESTION_ID;
  title: string;
  type: 'radio' | 'checkbox';
  defaultValue?: string | number | string[] | number[];
  description?: string;
  showIf?: QuestionDisplayCondition[];
  options: Option[];
};

export type InputQuestion = {
  id: QUESTION_ID;
  title: string;
  type: 'text';
  defaultValue?: string;
  placeholder?: string;
  description?: string;
  showIf?: QuestionDisplayCondition[];
  options?: string[];
};
export type DropdownQuestion = {
  id: QUESTION_ID;
  title: string;
  type: 'dropdown';
  defaultValue?: string;
  placeholder?: string;
  description?: string;
  showIf?: QuestionDisplayCondition[];
  options: Option[];
};
