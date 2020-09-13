import { Option, Question } from '../types';
import { QUESTION_ID } from '../enums';
import questionData from './questionData';

export const generateDefaultRadioSelectedOptions = (
  radioQuestions: Question[]
): RadioSelectionMap =>
  radioQuestions
    .filter((q) => q.type === 'radio')
    .reduce(
      (map, question) => ({
        ...map,
        [question.id]: getDefaultRadioOption(question),
      }),
      {}
    );

export const generateDefaultCheckboxSelectedOptions = (
  checkboxQuestions: Question[]
): CheckboxSelectionMap =>
  checkboxQuestions
    .filter((q) => q.type === 'checkbox')
    .reduce(
      (map, question) => ({
        ...map,
        [question.id]: getDefaultCheckboxOption(question),
      }),
      {}
    );

export const getDefaultRadioOption = (question: Question): Option | null =>
  question.options.find((o) => o.value === question.defaultValue) || null;

export const getDefaultCheckboxOption = (question: Question): Option[] => {
  if (!question.defaultValue) {
    return [];
  }
  if (typeof question.defaultValue === 'string') {
    return question.options.filter((o) => o.value === question.defaultValue);
  }
  if (question.defaultValue instanceof Array) {
    return question.options.filter((o) =>
      (question.defaultValue as (string | number)[]).includes(o.value)
    );
  }
  return [];
};

export type RadioSelectionMap = Partial<
  {
    [questionId in QUESTION_ID]: Option | null;
  }
>;
export type CheckboxSelectionMap = Partial<
  {
    [questionId in QUESTION_ID]: Option[];
  }
>;

export const questions = questionData;
