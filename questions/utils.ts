import { BOOL_VALUE, QUESTION_ID } from '../enums';
import {
  Answer,
  AnswerMap,
  CheckboxAnswer,
  DropdownAnswer,
  Option,
  Question,
  QuestionDisplayCondition,
  QuestionType,
  RadioAnswer,
  TextAnswer,
} from '../types';
import { getApexDomain } from '../utils/domain';
import { questionMap, questions } from './data';
import { answerIsApexDomain, answerIsWWWDomain } from './conditions';

export const getDefaultAnswer = (
  question: Question,
  answer?: string
): Answer => {
  if (question.type === QuestionType.TEXT) {
    return answer || question.defaultValue || null;
  }
  if (
    question.type === QuestionType.RADIO ||
    question.type === QuestionType.DROPDOWN
  ) {
    const defaultValue = answer || question.defaultValue;
    return question.options.find((o) => o?.value === defaultValue) || null;
  }
  if (question.type === QuestionType.CHECKBOX) {
    const defaultValue = answer || question.defaultValue;
    if (!defaultValue) {
      return [];
    }
    if (typeof defaultValue === 'string' || typeof defaultValue === 'number') {
      return question.options.filter((o) => o.value === defaultValue);
    }
    if (defaultValue instanceof Array) {
      return question.options.filter((o) =>
        (defaultValue as string[]).includes(o.value)
      );
    }
    return null;
  }
};

export const normalizeAnswer = (answer: Answer): string => {
  if (answer === null || answer === undefined) {
    return '';
  }
  if (
    typeof answer === 'string' ||
    typeof answer === 'number' ||
    typeof answer === 'boolean'
  ) {
    return String(answer).toLowerCase().trim();
  }
  if (answer instanceof Array) {
    return (answer as Option[])
      .map((o) => o.value.toLowerCase().trim())
      .join(',');
  }
  if (answer.value !== null) {
    return answer.value.toLowerCase().trim();
  }
  return '';
};

export const getNormalizedAnswer = (
  answers: AnswerMap,
  questionId: QUESTION_ID
): string => {
  return normalizeAnswer(answers[questionId]);
};

export const hasAnswered = (
  answers: AnswerMap,
  questionId: QUESTION_ID,
  value: string | BOOL_VALUE | null
): boolean => {
  const question = questionMap[questionId];
  if (!question) {
    throw new Error(`Unknown questionId ${questionId}`);
  }
  if (answers[questionId] === undefined) {
    return false;
  }
  if (question.type === QuestionType.RADIO) {
    const answer = answers[questionId] as RadioAnswer;
    if (answer === null) {
      return value === null;
    }
    return answer.value === value;
  }
  if (question.type === QuestionType.CHECKBOX) {
    const answer = answers[questionId] as CheckboxAnswer;
    if (answer === null) {
      return value === null;
    }
    return !!answer.find((o) => o.value === value);
  }
  if (question.type === QuestionType.DROPDOWN) {
    const answer = answers[questionId] as DropdownAnswer;
    if (answer === null) {
      return value === null;
    }
    return answer.value === value;
  }
  if (question.type === QuestionType.TEXT) {
    const answer = answers[questionId] as TextAnswer;
    if (answer === null) {
      return value === null;
    }
    return answer === value;
  }
};

const isFulfilled = (
  condition: QuestionDisplayCondition,
  answers: AnswerMap
): boolean => {
  if (typeof condition.value === 'function') {
    return condition.value(answers[condition.questionId]);
  }
  return hasAnswered(answers, condition.questionId, condition.value);
};

const shouldSkip = (question: Question, answers: AnswerMap): boolean => {
  if (!question.showIf) {
    return false;
  }
  return !!question.showIf.find((c) => !isFulfilled(c, answers));
};

const getLastRenderIndex = (
  answers: AnswerMap,
  answeredQuestions: QUESTION_ID[],
  startAtIndex = 0
) => {
  const question = questions[startAtIndex];
  if (!question) {
    return startAtIndex;
  }
  const questionMissingAnswer =
    !answeredQuestions.includes(question.id) && !shouldSkip(question, answers);
  if (questionMissingAnswer) {
    return startAtIndex;
  }
  return getLastRenderIndex(answers, answeredQuestions, startAtIndex + 1);
};

export const getQuestionsToRender = (
  answers: AnswerMap,
  answeredQuestions: QUESTION_ID[]
): Question[] => {
  const questionsToRender: Question[] = [];
  const lastRenderIndex = getLastRenderIndex(answers, answeredQuestions);
  questions.slice(0, lastRenderIndex + 1).forEach((question) => {
    if (!shouldSkip(question, answers)) {
      questionsToRender.push(question);
    }
  });

  return questionsToRender;
};

export const getForwardingBucketValue = (answers: AnswerMap): string | null => {
  const bucketName = answers[QUESTION_ID.bucketName] as TextAnswer;
  const forwardToApex = answers[QUESTION_ID.apexForwarding];
  const forwardToWWW = answers[QUESTION_ID.wwwForwarding];
  if (answerIsApexDomain(bucketName) && forwardToWWW) {
    return `www.${bucketName}`;
  }
  if (answerIsWWWDomain(bucketName) && forwardToApex) {
    return getApexDomain(bucketName);
  }
  return null;
};
