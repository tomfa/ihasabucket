import { QUESTION_ID } from './enums';

export type Option = {
  value: string;
  label: string;
};

export type QuestionDisplayCondition = {
  questionId: QUESTION_ID;
  value: string;
};

export type Question = {
  id: QUESTION_ID;
  title: string;
  type: 'radio' | 'checkbox';
  defaultValue?: string | number | string[] | number[];
  description?: string;
  showIf?: QuestionDisplayCondition[];
  options: Option[];
};
