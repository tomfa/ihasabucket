import { useCallback, useEffect, useMemo, useState } from 'react';

import { QUESTION_ID } from '../enums';
import { Answer, AnswerMap } from '../types';
import { useUrlState } from '../utils/useUrlState';
import {
  getDefaultAnswer,
  getQuestionsToRender,
  normalizeAnswer,
} from './utils';
import { questions } from './data';

const useQuestions = () => {
  const [answeredQuestions, setAnsweredQuestions] = useState<QUESTION_ID[]>([]);
  const { urlData, updateUrlData } = useUrlState();
  const [answers, setAnswers] = useState<AnswerMap>({} as AnswerMap);
  useEffect(() => {
    if (answeredQuestions.length > 0) {
      return;
    }
    const defaultAnswers = questions.reduce(
      (map, question) => ({
        ...map,
        [question.id]: getDefaultAnswer(
          question,
          urlData[question.id] ? String(urlData[question.id]) : undefined
        ),
      }),
      {} as AnswerMap
    );
    const isFirstRender = !Object.keys(answers).length;
    const isInitialLoadFromUrl = Object.keys(urlData).length;
    if (isInitialLoadFromUrl) {
      setAnsweredQuestions(Object.keys(urlData) as QUESTION_ID[]);
      setAnswers(defaultAnswers);
    } else if (isFirstRender) {
      setAnswers(defaultAnswers);
    }
  }, [urlData, answeredQuestions]);
  const renderQuestions = useMemo(
    () => getQuestionsToRender(answers, answeredQuestions),
    [answeredQuestions, answers]
  );
  const hasAnsweredAll = !renderQuestions.find(
    (q) => !answeredQuestions.includes(q.id)
  );
  const answerQuestion = useCallback(
    (questionId: QUESTION_ID, answer: Answer) => {
      updateUrlData({ [String(questionId)]: normalizeAnswer(answer) });
      setAnswers((prevAnswers) => ({
        ...prevAnswers,
        [questionId]: answer,
      }));
      setAnsweredQuestions((qs) => [...qs, questionId]);
    },
    [updateUrlData]
  );
  return { answers, renderQuestions, answerQuestion, hasAnsweredAll };
};

export default useQuestions;
