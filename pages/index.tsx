import { useState } from 'react';
import {
  Colored, Main, PageWrapper, Section,
} from '../components/utils';
import Header from '../components/Header';
import BlockQuote from '../components/BlockQuote';
import RadioGroup from '../components/forms/RadioGroup';
import { Option, Question } from '../components/forms/types';
import CheckboxGroup from '../components/forms/CheckboxGroup';

const questions: Question[] = [
  {
    id: 'storage-type',
    title: 'What do we store',
    type: 'radio',
    description:
      'Unlike normal file storage, webapps like React and Vue have a ' +
      'default path, and error pages.',
    options: [
      { value: 'webapp', label: 'A webapp' },
      { value: 'files', label: 'Files' },
    ],
  },
  {
    id: 'staging-env',
    title: 'Do we want a staging environment',
    type: 'radio',
    description:
      'A staging (or test) environment would mean a duplicate ' +
      'set of buckets. The cost is insignificant.',
    options: [
      { value: '1', label: 'Yes' },
      { value: '0', label: 'No' },
    ],
  },
];

type RadioSelectionMap = {
  [questionId: string]: Option | null;
};
type CheckboxSelectionMap = {
  [questionId: string]: Option[];
};

const getDefaultRadioOption = (question: Question): Option | null => question.options.find((o) => o.value === question.defaultValue) || null;

const getDefaultCheckboxOption = (question: Question): Option[] => {
  if (!question.defaultValue) {
    return [];
  }
  if (typeof question.defaultValue === 'string') {
    return question.options.filter((o) => o.value === question.defaultValue);
  }
  if (question.defaultValue instanceof Array) {
    return question.options.filter((o) => (question.defaultValue as (string | number)[]).includes(o.value));
  }
  return [];
};

const generateDefaultRadioSelectedOptions = (
  radioQuestions: Question[],
): RadioSelectionMap => radioQuestions
  .filter((q) => q.type === 'radio')
  .reduce(
    (map, question) => ({
      ...map,
      [question.id]: getDefaultRadioOption(question),
    }),
    {},
  );

const generateDefaultCheckboxSelectedOptions = (
  checkboxQuestions: Question[],
): CheckboxSelectionMap => checkboxQuestions
  .filter((q) => q.type === 'checkbox')
  .reduce(
    (map, question) => ({
      ...map,
      [question.id]: getDefaultCheckboxOption(question),
    }),
    {},
  );

export default function Home() {
  const [selectedRadioOptions, setSelectedRadioOptions] = useState<
  RadioSelectionMap
  >(generateDefaultRadioSelectedOptions(questions));
  const [selectedCheckboxOptions, setSelectedCheckboxOptions] = useState<
  CheckboxSelectionMap
  >(generateDefaultCheckboxSelectedOptions(questions));

  return (
    <PageWrapper>
      <Header />
      <Main>
        <BlockQuote
          author={'Lolrus, the bucket walrus'}
          source={'At the launch of AWS S3 in 2006'}
        >
          <>
            Hosting a
            <Colored> webapp </Colored>
            or need to store uploads? Put them in S3 buckets. It&apos;s
            <Colored> cheap </Colored>
            and
            <Colored> reliable</Colored>
            . Let me show how
            <Colored> easy </Colored>
            it is.
          </>
        </BlockQuote>
      </Main>
      <Section>
        {questions.map((question) => {
          if (question.type === 'radio') {
            return (
              <RadioGroup
                id={question.id}
                key={question.id}
                options={question.options}
                selectedOption={selectedRadioOptions[question.id] || null}
                onChange={(value) => setSelectedRadioOptions((prev) => ({
                  ...prev,
                  [question.id]: value,
                }))}
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
                onChange={(value) => setSelectedCheckboxOptions((prev) => ({
                  ...prev,
                  [question.id]: value,
                }))}
                title={question.title}
                description={question.description}
              />
            );
          }
          throw new Error(`Unexpected question type ${question.type}`);
        })}
      </Section>
    </PageWrapper>
  );
}
