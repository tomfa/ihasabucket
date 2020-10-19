import { useState } from 'react';
import QuestionTitle from './QuestionTitle.styles';
import FAQAnswer from './FAQAnswer.styles';
import { FAQuestion } from './types';

const FAQAccordian = ({ question }: { question: FAQuestion }) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const children =
    typeof question.answer === 'string'
      ? divideText(question.answer)
      : question.answer;
  return (
    <div id={question.id}>
      <QuestionTitle onClick={() => setOpen((open) => !open)}>
        {question.title}
      </QuestionTitle>
      <FAQAnswer open={isOpen}>{children}</FAQAnswer>
    </div>
  );
};

const divideText = (text: string) => {
  return (
    <>
      {text.split('\n').map((t, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <p key={i}>{t}</p>
      ))}
    </>
  );
};

export default FAQAccordian;
