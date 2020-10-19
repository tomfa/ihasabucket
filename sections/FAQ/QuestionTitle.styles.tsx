import styled from 'styled-components';
import FAQAnswer from './FAQAnswer.styles';

const QuestionTitle = styled.button`
  width: 100%;
  background: none;
  border: 2px dashed transparent;
  outline: none;
  text-align: left;
  font-size: 1.3rem;
  padding: 0;
  margin-top: 0.3rem;

  &:focus,
  &:active {
    color: ${(p) => p.color || p.theme.colors.secondary};

    & + ${FAQAnswer} {
      border-left-color: ${(p) => p.color || p.theme.colors.secondary};
    }
  }
`;

export default QuestionTitle;
