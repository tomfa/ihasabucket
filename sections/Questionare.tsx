import scrollIntoView from 'scroll-into-view';

import { useEffect } from 'react';
import useQuestions from '../questions/useQuestions';
import { Section } from '../components/utils';
import RadioGroup from '../components/forms/RadioGroup';
import CheckboxGroup from '../components/forms/CheckboxGroup';
import {
  CheckboxAnswer,
  DropdownAnswer,
  RadioAnswer,
  TextAnswer,
} from '../types';
import TextInput from '../components/forms/TextInput';
import DropDown from '../components/forms/Dropdown';

const Questionare = () => {
  const {
    answers,
    renderQuestions,
    updateAnswer,
    answerQuestion,
    hasAnsweredAll,
  } = useQuestions();

  useEffect(() => {
    if (hasAnsweredAll) {
      const element = document.getElementById('infrastructure');
      if (element) {
        scrollIntoView(element, { align: { top: 0, topOffset: 50 } });
      }
    } else if (renderQuestions.length > 1) {
      const lastQuestion = renderQuestions[renderQuestions.length - 1];
      const element = document.getElementById(lastQuestion.id);
      if (element) {
        scrollIntoView(element, { align: { top: 0, topOffset: 50 } });
      }
    }
  }, [hasAnsweredAll, renderQuestions.length]);

  return (
    <Section>
      {renderQuestions.map((question) => {
        if (question.type === 'radio') {
          const answer = answers[question.id] as RadioAnswer;
          return (
            <RadioGroup
              id={question.id}
              key={question.id}
              options={question.options}
              selectedOption={answer}
              onChange={(value) => answerQuestion(question.id, value)}
              title={question.title}
              description={question.description}
            />
          );
        }
        if (question.type === 'dropdown') {
          const answer = answers[question.id] as DropdownAnswer;
          return (
            <DropDown
              id={question.id}
              key={question.id}
              options={question.options}
              selectedOption={answer}
              onChange={(value) => answerQuestion(question.id, value)}
              title={question.title}
              description={question.description}
            />
          );
        }
        if (question.type === 'checkbox') {
          const answer = answers[question.id] as CheckboxAnswer;
          return (
            <CheckboxGroup
              id={question.id}
              key={question.id}
              options={question.options}
              selectedOptions={answer}
              onChange={(value) => answerQuestion(question.id, value)}
              title={question.title}
              description={question.description}
            />
          );
        }
        if (question.type === 'text') {
          const answer = answers[question.id] as TextAnswer;
          return (
            <TextInput
              id={question.id}
              key={question.id}
              value={answer}
              placeholder={question.placeholder}
              placeholders={question.placeholders}
              onChange={(value) => updateAnswer(question.id, value)}
              onSubmit={(value) => answerQuestion(question.id, value)}
              title={question.title}
              description={question.description}
            />
          );
        }
        throw new Error(`Unexpected question type in ${question}`);
      })}
    </Section>
  );
};

export default Questionare;
