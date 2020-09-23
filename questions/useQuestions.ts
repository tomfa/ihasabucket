import { useCallback, useMemo, useState } from 'react';

import { QUESTION_ID } from '../enums';
import { Answer, AnswerMap } from '../types';
import { getDefaultAnswer, getQuestionsToRender } from './utils';
import { questions } from './data';

const defaultAnswers = questions.reduce(
  (map, question) => ({ ...map, [question.id]: getDefaultAnswer(question) }),
  {} as AnswerMap
);

const useQuestions = () => {
  const [answeredQuestions, setAnsweredQuestions] = useState<QUESTION_ID[]>([]);
  const [answers, setAnswers] = useState<AnswerMap>(defaultAnswers);
  const renderQuestions = useMemo(
    () => getQuestionsToRender(answers, answeredQuestions),
    [answeredQuestions, answers]
  );
  const hasAnsweredAll = !renderQuestions.find(
    (q) => !answeredQuestions.includes(q.id)
  );
  const answerQuestion = useCallback(
    (questionId: QUESTION_ID, answer: Answer) => {
      setAnswers((prevAnswers) => ({
        ...prevAnswers,
        [questionId]: answer,
      }));
      setAnsweredQuestions((qs) => [...qs, questionId]);
    },
    []
  );
  return { answers, renderQuestions, answerQuestion, hasAnsweredAll };
};

export default useQuestions;
