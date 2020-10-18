import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { QUESTION_ID } from '../enums';
import { Answer, AnswerMap } from '../types';
import { Data, useUrlState } from '../utils/useUrlState';
import { trail } from '../utils/splitbee';
import {
  getDefaultAnswer,
  getQuestionsToRender,
  normalizeAnswer,
} from './utils';
import { questions } from './data';

export const useQuestionsData = () => {
  const [hasReceivedInput, setHasReceivedInput] = useState<boolean>(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<QUESTION_ID[]>([]);
  const { urlData, updateUrlData } = useUrlState();
  const [answers, setAnswers] = useState<AnswerMap>({} as AnswerMap);

  useEffect(() => {
    const initialDefaultAnswersLoaded = Object.keys(answers).length > 0;
    const hasUrlData = Object.keys(urlData).length > 0;
    const hasAnsweredQuestions = answeredQuestions.length > 0;
    if (hasReceivedInput || hasAnsweredQuestions) {
      return;
    }
    if (!initialDefaultAnswersLoaded) {
      const defaultAnswers = getInitialAnswers();
      setAnswers(defaultAnswers);
    }
    if (!hasUrlData) {
      return;
    }
    const urlAnsweredQuestions = getQuestionsInUrlData(urlData);
    const urlAnswers = getInitialAnswers(urlData);
    setAnswers(urlAnswers);
    setAnsweredQuestions(urlAnsweredQuestions);
  }, [urlData, answers, answeredQuestions, hasReceivedInput]);

  const renderQuestions = useMemo(
    () => getQuestionsToRender(answers, answeredQuestions),
    [answeredQuestions, answers]
  );
  const hasAnsweredAll = !renderQuestions.find(
    (q) => !answeredQuestions.includes(q.id)
  );
  const updateAnswer = useCallback(
    (questionId: QUESTION_ID, answer: Answer) => {
      setHasReceivedInput(true);
      updateUrlData({ [String(questionId)]: normalizeAnswer(answer) });
      setAnswers((prevAnswers) => ({
        ...prevAnswers,
        [questionId]: answer,
      }));
    },
    [setAnswers, updateUrlData]
  );
  const answerQuestion = useCallback(
    (questionId: QUESTION_ID, answer: Answer) => {
      updateAnswer(questionId, answer);
      setAnsweredQuestions((qs) => {
        if (qs.includes(questionId)) {
          return qs;
        }
        trail(questionId, { answer });
        return [...qs, questionId];
      });
    },
    [updateAnswer]
  );
  return {
    answers,
    renderQuestions,
    updateAnswer,
    answerQuestion,
    hasAnsweredAll,
  };
};

const getInitialAnswers = (urlData?: Data) =>
  questions.reduce(
    (map, question) => ({
      ...map,
      [question.id]: getDefaultAnswer(
        question,
        urlData && urlData[question.id] !== undefined
          ? String(urlData[question.id])
          : undefined
      ),
    }),
    {} as AnswerMap
  );

const getQuestionsInUrlData = (urlData: Data) => {
  const urlQuestions = Object.keys(urlData) as QUESTION_ID[];

  const hasAnsweredEmptyBucketName =
    urlQuestions.length && !urlQuestions.includes(QUESTION_ID.bucketName);
  if (hasAnsweredEmptyBucketName) {
    urlQuestions.push(QUESTION_ID.bucketName);
  }
  return urlQuestions;
};

const QuestionContext = React.createContext<
  ReturnType<typeof useQuestionsData>
>(undefined);

export const QuestionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const questionData = useQuestionsData();
  return (
    <QuestionContext.Provider value={questionData}>
      {children}
    </QuestionContext.Provider>
  );
};

const useQuestions = (): ReturnType<typeof useQuestionsData> =>
  React.useContext(QuestionContext);

export default useQuestions;
