import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { BOOL_VALUE, QUESTION_ID } from '../enums';
import { Answer, AnswerMap } from '../types';
import { Data, useUrlState } from '../utils/useUrlState';
import { trail } from '../utils/splitbee';
import { QuestionSummary } from '../utils/terraform/types';
import { isDomain } from '../utils/domain';
import {
  getDefaultAnswer,
  getForwardingBucketValue,
  getNormalizedAnswer,
  getQuestionsToRender,
  hasAnswered,
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

const getQuestionSummary = (answers: AnswerMap): QuestionSummary => ({
  webApp: hasAnswered(answers, QUESTION_ID.storageType, 'webapp'),
  shared: hasAnswered(answers, QUESTION_ID.aclPublic, BOOL_VALUE.TRUE),
  staging: hasAnswered(answers, QUESTION_ID.stagingEnv, BOOL_VALUE.TRUE),
  staticPage: hasAnswered(answers, QUESTION_ID.webappIsStatic, BOOL_VALUE.TRUE),
  createCertificates:
    isDomain(getNormalizedAnswer(answers, QUESTION_ID.bucketName)) &&
    (hasAnswered(answers, QUESTION_ID.configureDns, BOOL_VALUE.TRUE) ||
      hasAnswered(answers, QUESTION_ID.createCertificates, BOOL_VALUE.TRUE)),
  configureDns:
    isDomain(getNormalizedAnswer(answers, QUESTION_ID.bucketName)) &&
    hasAnswered(answers, QUESTION_ID.configureDns, BOOL_VALUE.TRUE),
  errorPath: getNormalizedAnswer(answers, QUESTION_ID.errorPath),
  forwardingBucket: getForwardingBucketValue(answers),
  bucketName: getNormalizedAnswer(answers, QUESTION_ID.bucketName),
  region: getNormalizedAnswer(answers, QUESTION_ID.region),
});

const QuestionContext = React.createContext<{
  questions: ReturnType<typeof useQuestionsData>;
  summary: ReturnType<typeof getQuestionSummary>;
}>(undefined);

export const QuestionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const questionData = useQuestionsData();
  const questionResults = useMemo(
    () => getQuestionSummary(questionData.answers),
    [questionData.answers]
  );
  return (
    <QuestionContext.Provider
      value={{ questions: questionData, summary: questionResults }}>
      {children}
    </QuestionContext.Provider>
  );
};

export const useQuestions = (): ReturnType<typeof useQuestionsData> =>
  React.useContext(QuestionContext).questions;

export const useSummary = (): ReturnType<typeof getQuestionSummary> =>
  React.useContext(QuestionContext).summary;

export default useQuestions;
