import { useState } from 'react';
import styled from 'styled-components';

import Header from '../Header.style';
import Description from './Description.style';
import Question from './Question.style';
import Input from './Input.style';

interface Props {
  id: string;
  value?: string;
  onSubmit: (selected: string) => void;
  title: string;
  placeholder?: string;
  description?: string;
  disabled?: boolean;
}

const SubmitButton = styled.button`
  color: ${(p) => p.theme.colors.textSecondary};
  background-color: ${(p) => p.theme.colors.primary};
  border: none;
  flex: 0.15;

  outline-style: dashed;
  outline-width: 2px;
  &:focus,
  &:active {
    outline-color: ${(p) => p.theme.colors.primary};
  }
`;

const InputSubmitContainer = styled.div`
  display: flex;
`;

const TextInput = ({
  onSubmit,
  value = '',
  title,
  placeholder,
  description,
}: Props) => {
  const [inputValue, setInputValue] = useState<string>(value);
  return (
    <Question>
      {title && <Header>{title}</Header>}
      <InputSubmitContainer>
        <Input
          type="text"
          value={inputValue}
          placeholder={placeholder}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && onSubmit(inputValue)}
        />
        <SubmitButton onClick={() => onSubmit(inputValue)}>OK</SubmitButton>
      </InputSubmitContainer>
      {description && <Description>{description}</Description>}
    </Question>
  );
};

export default TextInput;
