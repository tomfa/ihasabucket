import { useCallback, useState } from 'react';
import { Colored, PageWrapper, Section } from '../components/utils';
import Header from '../components/HeaderSection';
import BlockQuote from '../components/BlockQuote';
import RadioGroup from '../components/forms/RadioGroup';
import CheckboxGroup from '../components/forms/CheckboxGroup';
import {
  CheckboxSelectionMap,
  generateDefaultCheckboxSelectedOptions,
  generateDefaultRadioSelectedOptions,
  questions,
  RadioSelectionMap,
} from '../utils/questions';
import Infrastructure from '../components/Infrastructure';
import { BOOL_VALUE, QUESTION_ID } from '../enums';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <PageWrapper>
      <Header />
      <Intro />
      <Questionare />
      <Footer />
    </PageWrapper>
  );
}

const Intro = () => (
  <Section>
    <BlockQuote
      author={'Lolrus, the bucket walrus'}
      source={'At the launch of AWS S3 in 2006'}>
      <>
        Hosting a<Colored> webapp </Colored>
        or need to store uploads? Put them in S3 buckets. It&apos;s
        <Colored> cheap </Colored>
        and
        <Colored> reliable</Colored>. With CloudFront cache, it&apos;ll be
        blazingly <Colored>fast</Colored>. Let&apos;s see how
        <Colored> easy </Colored>
        it can be.
      </>
    </BlockQuote>
  </Section>
);

const Questionare = () => {
  const [selectedRadioOptions, setSelectedRadioOptions] = useState<
    RadioSelectionMap
  >(generateDefaultRadioSelectedOptions(questions));
  const [selectedCheckboxOptions, setSelectedCheckboxOptions] = useState<
    CheckboxSelectionMap
  >(generateDefaultCheckboxSelectedOptions(questions));
  const [questionRenderCount, setQuestionRenderCount] = useState<number>(0);
  const hasSelected = useCallback(
    (questionId: QUESTION_ID, value: string): boolean => {
      const question = questions.find((q) => q.id === questionId);
      if (!question) {
        throw Error(`Missing question for ${questionId}`);
      }
      if (!question.options.filter((o) => o.value === value)) {
        throw Error(`Question ${questionId} does not have option ${value}`);
      }
      if (question.type === 'radio') {
        return selectedRadioOptions[question.id]?.value === value;
      }
      if (question.type === 'checkbox') {
        return !!selectedCheckboxOptions[question.id].find(
          (o) => o.value === value
        );
      }
    },
    [selectedRadioOptions, selectedCheckboxOptions, questions]
  );
  const hasAnsweredAll = questionRenderCount === questions.length;
  return (
    <Section>
      {questions.slice(0, questionRenderCount + 1).map((question) => {
        const indexOfAllQuestions = questions.indexOf(question);
        const isLast = indexOfAllQuestions === questionRenderCount;
        const shouldSkip =
          question.showIf &&
          question.showIf.find((c) => !hasSelected(c.questionId, c.value));
        if (shouldSkip) {
          if (isLast) {
            setQuestionRenderCount((q) => q + 1);
          }
          return null;
        }
        if (question.type === 'radio') {
          const answerValue = selectedRadioOptions[question.id] || null;
          return (
            <RadioGroup
              id={question.id}
              key={question.id}
              options={question.options}
              selectedOption={answerValue}
              onChange={(value) => {
                setQuestionRenderCount((c) =>
                  Math.max(c, indexOfAllQuestions + 1)
                );
                setSelectedRadioOptions((prev) => ({
                  ...prev,
                  [question.id]: value,
                }));
              }}
              title={question.title}
              description={question.description}
            />
          );
        }
        if (question.type === 'checkbox') {
          return (
            <CheckboxGroup
              id={question.id}
              key={question.id}
              options={question.options}
              selectedOptions={selectedCheckboxOptions[question.id] || []}
              onChange={(value) => {
                setQuestionRenderCount((c) =>
                  Math.max(c, indexOfAllQuestions + 1)
                );
                setSelectedCheckboxOptions((prev) => ({
                  ...prev,
                  [question.id]: value,
                }));
              }}
              title={question.title}
              description={question.description}
            />
          );
        }
        throw new Error(`Unexpected question type ${question.type}`);
      })}
      {hasAnsweredAll && (
        <Infrastructure
          webApp={hasSelected(QUESTION_ID.storageType, 'webapp')}
          shared={hasSelected(QUESTION_ID.aclPublic, BOOL_VALUE.TRUE)}
          staging={hasSelected(QUESTION_ID.stagingEnv, BOOL_VALUE.TRUE)}
          staticPage={hasSelected(QUESTION_ID.webappIsStatic, BOOL_VALUE.TRUE)}
        />
      )}
    </Section>
  );
};
