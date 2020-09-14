import { useState } from 'react';

import Header from '../Header.style';
import Description from './Description.style';
import Question from './Question.style';
import Input from './Input.style';
import InputContainer from './InputContainer.styles';
import SubmitButton from './SubmitButton.styles';

interface Props {
  id: string;
  value?: string;
  onSubmit: (selected: string) => void;
  title: string;
  placeholder?: string;
  description?: string;
  disabled?: boolean;
}

const TextInput = ({
  onSubmit,
  value = '',
  title,
  placeholder,
  description,
}: Props) => {
  const [inputValue, setInputValue] = useState<string>(value);
  const [hasSubmitted, setSubmitted] = useState<boolean>(false);
  const submit = (submitValue) => {
    setSubmitted(true);
    onSubmit(submitValue);
  };
  return (
    <Question>
      {title && <Header>{title}</Header>}
      <InputContainer>
        <Input
          type="text"
          value={inputValue}
          placeholder={placeholder}
          onChange={(e) => {
            setInputValue(e.target.value);
            if (hasSubmitted) {
              onSubmit(e.target.value);
            }
          }}
          onKeyPress={(e) => e.key === 'Enter' && submit(inputValue)}
          onBlur={() => submit(inputValue)}
        />
        <SubmitButton
          type="submit"
          complete={inputValue.trim().length > 0}
          onClick={() => submit(inputValue)}
        />
      </InputContainer>
      {description && <Description>{description}</Description>}
    </Question>
  );
};

export default TextInput;
