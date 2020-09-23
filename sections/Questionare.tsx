import useQuestions from '../questions/useQuestions';
import { Section } from '../components/utils';
import RadioGroup from '../components/forms/RadioGroup';
import CheckboxGroup from '../components/forms/CheckboxGroup';
import { BOOL_VALUE, QUESTION_ID } from '../enums';
import {
  CheckboxAnswer,
  DropdownAnswer,
  RadioAnswer,
  TextAnswer,
} from '../types';
import TextInput from '../components/forms/TextInput';
import DropDown from '../components/forms/Dropdown';
import { getNormalizedAnswer, hasAnswered } from '../questions/utils';
import Infrastructure from './Infrastructure';

const Questionare = () => {
  const {
    answers,
    renderQuestions,
    answerQuestion,
    hasAnsweredAll,
  } = useQuestions();
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
              onSubmit={(value) => answerQuestion(question.id, value)}
              title={question.title}
              description={question.description}
            />
          );
        }
        throw new Error(`Unexpected question type in ${question}`);
      })}
      {hasAnsweredAll && (
        <Infrastructure
          webApp={hasAnswered(answers, QUESTION_ID.storageType, 'webapp')}
          shared={hasAnswered(answers, QUESTION_ID.aclPublic, BOOL_VALUE.TRUE)}
          staging={hasAnswered(
            answers,
            QUESTION_ID.stagingEnv,
            BOOL_VALUE.TRUE
          )}
          staticPage={hasAnswered(
            answers,
            QUESTION_ID.webappIsStatic,
            BOOL_VALUE.TRUE
          )}
          bucketName={getNormalizedAnswer(answers, QUESTION_ID.bucketName)}
          region={getNormalizedAnswer(answers, QUESTION_ID.region)}
        />
      )}
    </Section>
  );
};

export default Questionare;
