import { useState } from 'react';
import { Colored, Main, PageWrapper, Section } from '../components/utils';
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
          source={'At the launch of AWS S3 in 2006'}>
          <>
            Hosting a<Colored> webapp </Colored>
            or need to store uploads? Put them in S3 buckets. It&apos;s
            <Colored> cheap </Colored>
            and
            <Colored> reliable</Colored>. Let me show how
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
                onChange={(value) =>
                  setSelectedRadioOptions((prev) => ({
                    ...prev,
                    [question.id]: value,
                  }))
                }
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
                onChange={(value) =>
                  setSelectedCheckboxOptions((prev) => ({
                    ...prev,
                    [question.id]: value,
                  }))
                }
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
